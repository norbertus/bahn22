export class BahnHelper {

  constructor() { }

  // aim: Umformung datum nach BahnDatum String
  // beipiel return "171210/18"    "YYMMDD/HH"
  // wobei einzelen Tage mit führender Null

  // input:
  // return:
  convertDateTimeToURLExt(inpDate:Date) : string {
    var actHH = inpDate.getHours();
    var actDD = inpDate.getDate();
    var actMM = inpDate.getMonth() + 1;  // achtung +1 notwendig
    var actYYYY = inpDate.getFullYear();

    // Jahr zweistellig machen
    var actYY = (actYYYY-2000).toString();

    // Stunde, Tag und Monat mit führender Null versehen
    var actHHStr = actHH.toString();
    var actDDStr = actDD.toString();
    var actMMStr = actMM.toString();
    var actYYStr = actYY.toString();


    if (actHH < 10) {
        actHHStr = "0" + actHH.toString();
    }
    if (actDD < 10) {
        actDDStr = "0" + actDD.toString();
    }
    if (actMM < 10) {
        actMMStr = "0" + actMM.toString();
    }

    return actYYStr + actMMStr + actDDStr + '/' +  actHHStr;
  }

  convertBahnDateTimeStrToDate(inpBahnDateStr:string) : Date {
    var myyearstr = '20' + inpBahnDateStr.substring(0, 2);
    var myyearint = parseInt(myyearstr);

    var mymonthstr = inpBahnDateStr.substring(2, 4);
    var mymonthint = parseInt(mymonthstr);

    var mydaystr = inpBahnDateStr.substring(4, 6);
    var mydayint = parseInt(mydaystr);

    var myhourstr = inpBahnDateStr.substring(6, 8);
    var myhourint = parseInt(myhourstr);

    var myminutestr = inpBahnDateStr.substring(8, 10);
    var myminuteint = parseInt(myminutestr);

    var myNewDate = new Date(myyearint, (mymonthint-1), mydayint, myhourint, myminuteint);
    return myNewDate;
  }
}
