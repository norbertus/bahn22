import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

import { Timetable } from './timetable';

import { MessageService } from './message.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
//import * as xml2js from 'xml2js';

import { BahnHelper } from './bahn-helper';

@Injectable()
export class TimetableService {
  // Bsp für plan
  // https://api.deutschebahn.com/timetables/v1/plan/8011160/171203/16

  // Bsp. fchg
  //https://api.deutschebahn.com/timetables/v1/fchg/8011160


// old Interface 2016 DB Developer
//  private TimeTablePlanUrlShort = 'https://api.deutschebahn.com/timetables/v1/plan/';
//  private TimeTableFchgUrlShort = 'https://api.deutschebahn.com/timetables/v1/fchg/';

// newInterface 2022 DB API Marketplace
  private TimeTablePlanUrlShort = 'https://apis.deutschebahn.com/db-api-marketplace/apis/timetables/v1/plan/';
  private TimeTableFchgUrlShort = 'https://apis.deutschebahn.com/db-api-marketplace/apis/timetables/v1/fchg/';

  bahnhelper : BahnHelper;

  constructor(
    private http: HttpClient,
    private messageService: MessageService)
    {
      this.bahnhelper = new BahnHelper();
    }

  // input: id = BahnhofsID
  //       myDate: Datum und Uhrzeit  (volle stunde)
  getTimetablePlan(id: string, myDate: Date): Observable<string> {
    console.log('getTimetablePlan');
    var searchHours = myDate.getHours();
    //var myDate = new Date();

    // probeweise eine Stunde später
    //actDate.setHours(actDate.getHours() + 1);

    var newURLDateHourExt = this.bahnhelper.convertDateTimeToURLExt(myDate);
    console.log('bahnhelper ext: ' + newURLDateHourExt);

    // ExampleUrl = 'https://api.deutschebahn.com/timetables/v1/plan/8011160/171210/06';
    var TimeTablePlanUrlFull = this.TimeTablePlanUrlShort +
                      id.toString() + '/' + newURLDateHourExt;

    console.log('TimeTablePlanUrlFull:' + TimeTablePlanUrlFull);
    // Bsp. von
    // https://www.concretepage.com/angular-2/angular-httpclient-get-example
	  return this.http.get(TimeTablePlanUrlFull, {responseType: 'text'})
         .pipe(
          tap(_ => this.log(`fetched timetable plan hour=${searchHours} id=${id}`))//,
  		    //catchError(this.handleError<HttpResponse<any>>(`getTimetable id=${id}`))
	     )
	}


  getTimetableFchg(id: string): Observable<string> {
    console.log('getTimetableFchg');

    var TimeTableFchgUrlFull = this.TimeTableFchgUrlShort +
                      id.toString();

    console.log('TimeTableFchgUrlFull:' + TimeTableFchgUrlFull);
    // Bsp. von
    // https://www.concretepage.com/angular-2/angular-httpclient-get-example
    return this.http.get(TimeTableFchgUrlFull, {responseType: 'text'})
         .pipe(
          tap(_ => this.log(`fetched timetable fchg id=${id}`))//,
          //catchError(this.handleError<HttpResponse<any>>(`getTimetable id=${id}`))
       )
  }

  	/** Log a LocService message with the MessageService */
  	private log(message: string) {
  	  this.messageService.add('DepartureService: ' + message);
  	}

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  	private handleError<T> (operation = 'operation', result?: T) {
  	  return (error: any): Observable<T> => {

  		// TODO: send the error to remote logging infrastructure
  		console.error(error); // log to console instead

  		// TODO: better job of transforming error for user consumption
  		this.log(`${operation} failed: ${error.message}`);

  		// Let the app keep running by returning an empty result.
  		return of(result as T);
  	  };
  	}
}
