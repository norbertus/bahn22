import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

import { Loc } from './loc';
import { LocService } from './loc.service';

import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

// cache location data

@Injectable()
export class LocationDataproviderService implements OnInit{
	cachedLocations: Loc[];


	constructor(private locService: LocService) { }


	ngOnInit() {
	    console.log('LocationDataproviderService ngOnInit');
		this.getLocations();
	}


	getLocations() : Observable<Loc[]> {
	    if (typeof(this.cachedLocations) == 'undefined') {
			this.locService.getLocations()
			.subscribe(locations => this.cachedLocations = locations);
		    console.log('LocationDataproviderService getLocations() first');

		}
		else {
			console.log('LocationDataproviderService getLocations()');
		}
		return of(this.cachedLocations as Loc[])
	}


	getLoc(id: string): Observable<Loc> {
	   console.log('LocationDataproviderService getLoc');
	   return of({"name":"dummy", "ds100":"XX", "idLoc":"0", "lon":"0", "lat":"0"} as Loc);
	}

	searchLocations(term: string): Observable<Loc[]> {
	  if (!term.trim()) {
		// if not search term, return empty loc array.
		return of([]);
	  }


	  if (typeof(this.cachedLocations) == 'undefined') {
			console.log('LocationDataproviderService typeof:' + typeof(this.cachedLocations));
			console.log('LocationDataproviderService getLocations()');
			this.getLocations();
			return of([{"name":"dummy", "ds100":"XX", "idLoc":"0", "lon":"0", "lat":"0"}] as Loc[]);
	  }
	  //console.log('LocationDataproviderService typeof2:' + typeof(this.cachedLocations));


	  if (this.cachedLocations.length > 1) {
			//console.log('LocationDataproviderService liste laenge:' + this.cachedLocations.length);
	  }

	  let mySortedObjArr = Array.from(this.cachedLocations);
	  console.log('LocationDataproviderService typeof myObjArr:' + typeof(mySortedObjArr));

	  // ok
	  /*
	  mySortedObjArr.sort(function(a,b) {
				return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
			});
	  */

	  // filter
	  // https://stackoverflow.com/questions/2852199/select-objects-in-array-based-on-regex-match

	  var myregex = term.toLowerCase();
	  var myFilteredObjArr = this.matcharray(new RegExp(myregex), mySortedObjArr);

	  //return of(mySortedObjArr as Loc[]);
	  return of(myFilteredObjArr as Loc[]);
	}

	matcharray(regexp, array) {
        var filtered = [];
        for (let i = 0; i < array.length; i++) {
            if (regexp.test(array[i].name.toLowerCase())) {
                filtered.push(array[i]);
            }
        }
        return filtered;
    }


}
