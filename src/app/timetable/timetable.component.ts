import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Timetable } from '../timetable';
import { TimetableService } from '../timetable.service';

import {MatButtonModule} from '@angular/material/button';

import * as xml2js from 'xml-js';

import { BahnHelper } from '../bahn-helper';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {
  MaxTimeTableDS = 10;
  timetable: Timetable[];
  timetableNotVisible: Timetable[];

  stationname :string;
  bahnhelper : BahnHelper;

  // aktuelle Zeit zum anzeigen
  actDisplayTime : Date;
  actDisplayTimer : NodeJS.Timer;

  //http://evanshortiss.com/development/nodejs/typescript/2016/11/16/timers-in-typescript.html
  lastFchgTime : Date;
  lastFchgTimer : NodeJS.Timer;

  lastPlanTime :Date;
  lastPlanTimer : NodeJS.Timer;

  constructor(
		private route: ActivatedRoute,
		private timetableService: TimetableService,
		private location: Location
	)
  {
    this.bahnhelper = new BahnHelper();
  }

  ngOnInit() {
    // erst mal vorbelegen
    this.actDisplayTime = new Date();
    // timer intervall setzen
    this.setActDisplayTimer();

    // alle 2 min aenderungen holen
    this.lastFchgTime = new Date();
    this.setTimerFchg();

    // alle Stunde neue Daten holen
    this.lastPlanTime = new Date();
    this.setTimerPlan();

    // Daten fuer aktuelle Stunde holen
    var searchDate = new Date();
  	this.getTimetablePlan(searchDate);

    // Daten für eine Stunde später holen
    searchDate.setHours(searchDate.getHours() + 1);
    this.getTimetablePlan(searchDate);

    // letzte aktualisierung FChg holen und anzeigen
    this.getTimetableFchg();
  }

  getTimetablePlan(myDate: Date): void {
	  const id = this.route.snapshot.paramMap.get('id');
	  this.timetableService.getTimetablePlan(id, myDate)
		.subscribe(
        res => {
          //console.log('Erg:' + res);
    		  var fullresjson = this.extractDataPlan(res);
          console.log('getTimetablePlan typoff(this.timetable):' + typeof(this.timetable));
          if (this.timetable) {
            console.log('getTimetablePlan defined - append data');
            // Ergebnis an timetable anhängen
            if (fullresjson.length) {
              // es kann sein das die Daten nicht angehängt werden müssen,
              // sondern vorne eingefügt werden müssen
              if (fullresjson.length > 0) {
                var firstObj = fullresjson[0];
                var firstOpjPtDate = this.bahnhelper.convertBahnDateTimeStrToDate(firstObj.nnpt);

                var appendToTimetable = false;
                if (this.isLastTimeTableEntryEarlyer(firstOpjPtDate)) {
                  appendToTimetable = true;
                }
                // appendToTimetable = false - Meaning: insert data in front of timetable
                // appendToTimetable = true - Meaning: appen data to timetable
                this.appendToTimetable(fullresjson, appendToTimetable);
              }
            }
            else {
              console.log('getTimetablePlan fullresjson.length==0');
            }
          }
          else {
            console.log('getTimetablePlan add first plan data');
            this.timetable = fullresjson;
            console.log('timetable plan: station:' + this.stationname);
          }
          //this.stationname will set inside  extractDataPlan
        })
		//console.log('loc-detail getLoc result: ' + JSON.stringify(this.loc));
	}

	extractDataPlan(xmlTxtData) : Array<Timetable> {
    var newProp_nnid = "nnpid";
    var newProp_nnc = "nnc";
    var newProp_nnpp = "nnpp";
    var newProp_nnpday = (new Date).getTime().toString();
    var newProp_nnpt = "nnpt";
    var newProp_nndir = "nndir";
    var newProp_nndelaymm = "0";
    var newProp_nndelaymmAsInt = 0;

    //let myNewObj = {"timetable":{"s":[], "station":""}};
    let myNewObj = {"s":[]};

	  var myresult = xml2js.xml2js(xmlTxtData, {compact: true, ignoreDeclaration: true});
    //console.log('Erg xml2js:');
	  //console.log(myresult);

    if (typeof(myresult.timetable.s) === 'undefined')
    {
          // nichts gefunden
          return;
    }

   // station name setzen
   console.log('typeof(myresult.timetable.station:' + typeof(myresult.timetable._attributes.station));
   if (typeof(myresult.timetable._attributes.station) === 'string')
   {
         this.stationname  = myresult.timetable._attributes.station;
         console.log('timetable station name setzen auf:' + this.stationname);
   }

    // daten sortieren  //TODO
    //let myNewTimeArr = Array.from(myresult.timetable.s);
    let myNewTimeArrOrig = myresult.timetable.s;

    //myNewTimeArr.sort(function(a., b){return a-b});
    console.log('myNewTimeArr');
	  console.log(myNewTimeArrOrig);

    // nur datensaetze berücksichtigen mit dp
    let myNewTimeArrOnlyDp = [];
    let myDpCounter = 0;
    for (var i = 0; i < myNewTimeArrOrig.length; i++) {
      var myTimeObjLine = myNewTimeArrOrig[i];
      if (typeof(myTimeObjLine.dp) === 'undefined')
      {
        continue;
      }
      myDpCounter += 1;
      //console.log('Nr. DS mit dp:' + myDpCounter);
      myNewTimeArrOnlyDp.push(myTimeObjLine);
    }

    var actDate = new Date();

    // filter only current datasets dp pt (=planed time)
    var oldestRemovedArr = [];
    for (var i = 0; i < myNewTimeArrOnlyDp.length; i++) {
      var myTimeObjLine2 = myNewTimeArrOnlyDp[i];
      if (myTimeObjLine2.dp._attributes.pt) {
        var bahnDate = this.bahnstrDatetoDate(myTimeObjLine2.dp._attributes.pt);
        //console.log('bahnDate: ' + bahnDate);
        //console.log('actDate: ' + actDate);
        //console.log('bahnDateMilli: ' + bahnDate.getTime());
        //console.log('actDateMilli: ' + actDate.getTime());

        if (bahnDate.getTime() > actDate.getTime()) {
          //console.log('bahnDate > actdate');
          oldestRemovedArr.push(myTimeObjLine2);
        }
      }
    }

    console.log('oldestRemovedArr');
	  console.log(oldestRemovedArr);


    let sortCounter = 0;
    oldestRemovedArr.sort(function(a,b) {
        sortCounter += 1;
        //console.log('sortCounter: ' + sortCounter);
        //console.log('a: ' + JSON.stringify(a));
        //console.log('b: ' + JSON.stringify(b));
        if ((typeof(a.dp) === 'undefined') || (typeof(b.dp) === 'undefined'))
        {
          //console.log('a.dp:' + JSON.stringify(a.dp));
          //console.log('b.dp:' + JSON.stringify(b.dp));
          //console.log('sort2:');
          return 0;
        }
        if ((typeof(a.dp._attributes.pt) === 'undefined') || (typeof(b.dp._attributes.pt) === 'undefined'))
        {
          //console.log('a.dp:' + JSON.stringify(a.dp));
          //console.log('b.dp:' + JSON.stringify(b.dp));
          //console.log('sort3:');
          return 0;
        }

        if (a.dp._attributes.pt > b.dp._attributes.pt) {
          //console.log(a.dp._attributes.pt  + '>' + b.dp._attributes.pt);
          return 1;
        }
        if  (b.dp._attributes.pt > a.dp._attributes.pt) {
          return -1;
        }
        return 0;
		});

    //console.log('oldestRemovedArr sorted');
    //console.log(oldestRemovedArr);
     
	  for (var i = 0; i < oldestRemovedArr.length; i++) {
		  var myDepObj = oldestRemovedArr[i];
      if (typeof(myDepObj.tl) !== 'undefined')
      {
  		  //console.log('c:' + myDepObj.tl._attributes.c);  // zug
        newProp_nnc = myDepObj.tl._attributes.c;
      }

      if (typeof(myDepObj.dp) !== 'undefined')
      {
  		  //console.log('pt:' + myDepObj.dp._attributes.pt);
  		  //console.log('sub pt:' + myDepObj.dp._attributes.pt.substring(0, 6));
        newProp_nnpt = myDepObj.dp._attributes.pt;
  		  var myNewDate = this.bahnhelper.convertBahnDateTimeStrToDate(myDepObj.dp._attributes.pt);
  		  //console.log(myNewDate);

        var myppth = myDepObj.dp._attributes.ppth;
        var ressplit_ppth = myppth.split("|");
        //console.log('split length:' + ressplit_ppth.length);
        //console.log('last split:' + ressplit_ppth[ressplit_ppth.length - 1]);

        newProp_nnpp = myDepObj.dp._attributes.pp;
        newProp_nnpday = myNewDate.getTime().toString();
        newProp_nndir = ressplit_ppth[ressplit_ppth.length - 1];

        //console.log('id:' + myDepObj._attributes.id);
        newProp_nnid = myDepObj._attributes.id;
      }
      else
      {
        continue;
        // ohne dp = departure kein Abfahrteintrag
      }

		  myNewObj.s.push({
        "nnid":newProp_nnid,
				"nnc": newProp_nnc,
        "nndelaymm": newProp_nndelaymm,
        "nndelaymmAsInt": newProp_nndelaymmAsInt,
				"nnpp": newProp_nnpp,
				"nnpday": newProp_nnpday,
        "nnpt": newProp_nnpt,
				"nndir" : newProp_nndir
			});
	  }
	  //console.log('MyObj:' + JSON.stringify(myNewObj));

	  return myNewObj.s;  // nur fuer test
	}


  getTimetableFchg(): void {
	  const id = this.route.snapshot.paramMap.get('id');
	  this.timetableService.getTimetableFchg(id)
		.subscribe(
        res => {
          //console.log('Erg Fchg:' + res);
          var fullresFchgjson = this.extractDataFchg(res);
          //console.log('timetable fchg:' + JSON.stringify(this.timetable));
        })
		//console.log('loc-detail getLoc result: ' + JSON.stringify(this.loc));
	}

  extractDataFchg(xmlTxtData) : Array<any> {
    let myNewObj = {"s":[]};

	  var myresult = xml2js.xml2js(xmlTxtData, {compact: true, ignoreDeclaration: true});
    //console.log('Erg Fchg xml2js:');
	  //console.log(myresult);
    //console.log('typeof myresult:' + typeof(myresult));


    if (typeof(myresult.timetable.s) === 'undefined')
    {
          // nichts gefunden
          console.log('typeof myresult.timetable.s === undefined');
          return myNewObj.s;
    }
    //console.log("Fchg Anz. s:" +  myresult.timetable.s.length);

    // alle Fchg DS durchgehen

    var mySArr = myresult.timetable.s;

    for (var f = 0; f < mySArr.length; f++) {
      //console.log(' ' + JSON.stringify(mySArr[f]));

      if ((!mySArr[f].dp) ||
          (!mySArr[f].dp._attributes) ||
          (!mySArr[f].dp._attributes.ct))
      {
        continue;
      }


      //console.log('mySArr[f].dp._attributes.ct' + mySArr[f].dp._attributes.ct);
      //console.log('typeof dp._attributes.ct: ' + typeof(mySArr[f].dp._attributes.ct));
      //console.log('dp._attributes.ct: ' + mySArr[f].dp._attributes.ct);
      //console.log('typeof id: ' + typeof(mySArr[f]._attributes.id));
      //console.log('       id: ' + mySArr[f]._attributes.id);

      // Timetable aktualisieren
      this.addDelay(mySArr[f]._attributes.id, mySArr[f].dp._attributes.ct);
      //console.log('found:' + mySArr[f]);
    }
  }

  addDelay(myid:string, myct: string) : void {
    if (!this.timetable.length) {
      return;
    }
    for (var i = 0; i < this.timetable.length; i++) {
      if (!this.timetable[i].nnid) {
        continue;
      }
      if (this.timetable[i].nnid === myid) {
        //console.log('nnpt    : ' + this.timetable[i].nnpt);
        //console.log('nnpt int: ' + parseInt(this.timetable[i].nnpt));
        //console.log('myct     : ' + myct);
        //console.log('myct int : ' +  parseInt(myct));

        this.timetable[i].nndelaymm = this.calcDelayMinute(myct, this.timetable[i].nnpt);
        this.timetable[i].nndelaymmAsInt = parseInt(this.timetable[i].nndelaymm);
      }
    }
  }

  addDelayTest() : void {
      if (typeof(this.timetable) === 'undefined') {
        return;
      }

      //console.log("typeof timetabel:" + typeof(this.timetable));

      for (var i = 0; i < this.timetable.length; i++) {
        // add new property /verspätung

        this.timetable[i].nndelaymm = i.toString();
        //console.log("nndelaymm:" + this.timetable[i].nndelaymm);
        if (this.timetable[i].nndelaymm === "0")
        {
          console.log("nndelaymm === 0");
        }
        //console.log("delay i:" + i);
        //console.log("  elem i:" + JSON.stringify(this.timetable[i]));
      }
  }

  // input inp1, inp 2 = string  in  der form:
  // Bsp 1801031826  YYMMDDHHmm
  // return = differenz in minuten
  calcDelayMinute(inp1:string, inp2:string): string {
    var delayStrmm = "0";

    // var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);
    var myInp1YY = inp1.substring(0, 2);
    var myInp1MM = inp1.substring(2, 4);
    var myInp1DD = inp1.substring(4, 6);
    var myInp1HH = inp1.substring(6, 8);
    var myInp1min = inp1.substring(8, 10);

    var myInp2YY = inp2.substring(0, 2);
    var myInp2MM = inp2.substring(2, 4);
    var myInp2DD = inp2.substring(4, 6);
    var myInp2HH = inp2.substring(6, 8);
    var myInp2min = inp2.substring(8, 10);
    var minuendDate = new Date(parseInt(myInp1YY), parseInt(myInp1MM), parseInt(myInp1DD), parseInt(myInp1HH), parseInt(myInp1min));
    var subtrahendDate = new Date(parseInt(myInp2YY), parseInt(myInp2MM), parseInt(myInp2DD), parseInt(myInp2HH), parseInt(myInp2min));

    var diffMilli = minuendDate.getTime() - subtrahendDate.getTime();
    var diffMin = Math.floor((diffMilli/1000)/60)
    //console.log('Diff(min) von ' + inp1 + ' und ' + inp2 + '  =' + diffMin);
    return diffMin.toString();
  }

  // helper function
  // inp1,= string  in  der form:
  // Bsp 1801031826  YYMMDDHHmm
  // return = date object
  bahnstrDatetoDate(inp1:string): Date {

    // var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);
    var myInp1YY = inp1.substring(0, 2);
    var myInp1MM = inp1.substring(2, 4);
    var myInp1DD = inp1.substring(4, 6);
    var myInp1HH = inp1.substring(6, 8);
    var myInp1min = inp1.substring(8, 10);
    var minp1Date = new Date(parseInt('20' + myInp1YY), parseInt(myInp1MM)-1, parseInt(myInp1DD), parseInt(myInp1HH), parseInt(myInp1min));
    //console.log('minp1Date: ' + minp1Date);
    return minp1Date;
  }

  isTimeTableId(newId:string): boolean {
    for (var k = 0; k < this.timetable.length; k++) {
      var actTimeTableObj = this.timetable[k];

      if (actTimeTableObj.nnid === newId) {
        console.log('isTimeTableId ===: ' + actTimeTableObj.nnid);
        return true;
      }
    }
    return false;
  }

  removeSomeTimeTableEntrys(): void {
    if (!this.timetable) {
      console.log('removeSomeTimeTableEntrys !this.timetable');
      return;
    }
    var countTimeTableDS = this.timetable.length;
    for (var k = this.MaxTimeTableDS; k < countTimeTableDS; k++) {
      this.timetable.pop();
    }
  }

  setActDisplayTimer(): void {
    this.actDisplayTimer = setInterval(() => { this.timerFuncActDisplayTime(); }, 1000);
  }
  timerFuncActDisplayTime(): void {
    this.actDisplayTime = new Date();
  }


  setTimerFchg(): void {
    //this.bahntimerFChg = setInterval(function(){ this.timerFuncFchg() }, 1000);
    this.lastFchgTimer = setInterval(() => { this.timerFuncFchg(); }, 1000 * 60 * 2);
  }

  timerFuncFchg(): void {
    this.lastFchgTime = new Date();
    this.getTimetableFchg();
    this.deleteDepartedLines();
  }

  setTimerPlan(): void {
    this.lastPlanTimer = setInterval(() => { this.timerFuncPlan(); }, 1000 * 60 * 60);
  }

  timerFuncPlan(): void {
    this.lastPlanTime = new Date();
    var searchDate  = new Date();
    // Daten fuer eine Stunde im voraus holen
    searchDate.setHours(searchDate.getHours() + 1);
    this.getTimetablePlan(searchDate);
  }

  deleteDepartedLines(): void {
    console.log('deleteDepartedLines');

    if (!this.timetable) {
      console.log('deleteDepartedLines !this.timetable');
      return;
    }

    var actTime = new Date();
    var countTimeTableDS = this.timetable.length;
    for (var k = countTimeTableDS-1; k >= 0; k--) {
      var actObj = this.timetable[k];
      if (!actObj.nnpt) {
        console.log('!actObj.nnpt fur elem: ' + k);
        continue;
      }
      var mypt = this.bahnhelper.convertBahnDateTimeStrToDate(actObj.nnpt);

      // alle DS entfernen, bei denen die die Abfahrtszeit
      // in der Vergangenheit liegt
      console.log('mypt   : ' + mypt);
      console.log('mypt   : ' + mypt.getTime());
      console.log('actTime: ' + actTime.getTime());

      if (mypt.getTime() < actTime.getTime()) {
        console.log('mypt < actTime: ');
        this.timetable.splice(k,1);
      }
    }

  }

  isLastTimeTableEntryEarlyer(newDate:Date): boolean {
    if (!this.timetable.length) {
      console.log('isLastTimeTableEntryEarlyer !this.timetable.length');
      return false;
    }

    var countTimeTableDS = this.timetable.length;
    var lastObj = this.timetable[countTimeTableDS -1];
    var lastObjPtDate = this.bahnhelper.convertBahnDateTimeStrToDate(lastObj.nnpt);
    console.log('lastObjPtDate: ' + lastObjPtDate);
    console.log('newDate:       ' + newDate);
    if (lastObjPtDate.getTime() <= newDate.getTime()) {
      console.log('isLastTimeTableEntryEarlyer == true  lastObjPtDate <= newDate: ');
      return true;
    }
    return false;
  }

  // toEnd = true  - es wird antimetabel angehängt
  // toEnd = false  - es wird vorne eingefügt
  //  (entsprechend umgekehrte Reihenfolge)
  appendToTimetable(newArr : Array<Timetable>, toEnd:boolean): void {
    if (!newArr.length) {
      console.log('appendToEndTimetable - no elements');
      return;
    }
    if (toEnd)
    {
      console.log('appendToEndTimetable - push');
      for (var j = 0; j < newArr.length; j++) {
          var actObj = newArr[j];

          // nur anhängen, wenn element noch nicht vorhanden
          // id Feld prüfen
          if (!this.isTimeTableId(actObj.nnid)) {
            this.timetable.push(actObj);
            //console.log('plan plus1 add: ' + j);
          }
      }
    }
    else {
      // vorne einfuegen
      console.log('appendToEndTimetable - unshift');
      for (var j = newArr.length - 1; j >= 0; j--) {
          var actObj = newArr[j];

          // nur anhängen, wenn element noch nicht vorhanden
          // id Feld prüfen
          if (!this.isTimeTableId(actObj.nnid)) {
            this.timetable.unshift(actObj);
          }
      }
    }
  }

  goBack(): void {
    this.location.back();
  }

}
