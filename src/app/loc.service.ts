import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

import { Loc } from './loc';
//import { HEROES } from './mock-locations';

import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class LocService {
	//private locationsUrl = 'api/locations';  // URL to web api
	//private locationsUrl = 'http://localhost:3000/getlocs/';

	//private locationsUrl = 'https://api.deutschebahn.com/bahnhofsfotos/v1/de/stations';
	//private locationsUrl = 'https://api.deutschebahn.com/freeplan/v1/location/B';

	private locationsSearchUrl = 'https://api.deutschebahn.com/freeplan/v1/location/';
	private locationsUrl = '../assets/locations.json';

	constructor(
	  private http: HttpClient,
	  private messageService: MessageService) { }


	/** GET locations from the server */
	getLocations (): Observable<Loc[]> {
	  return this.http.get<Loc[]>(this.locationsUrl)
		.pipe(
		  tap(locations => this.log(`fetched locations tab`)),
		  catchError(this.handleError('getLocations', []))
		);
	}

	/*
	getLoc(id: number): Observable<Loc> {
	  // Todo: send the message _after_ fetching the loc
	  this.messageService.add(`LocService: fetched loc id=${id}`);
	  return of(HEROES.find(loc => loc.id === id));
	}
	*/
	/** GET loc by id. Will 404 if id not found */
	getLoc(id: string): Observable<Loc> {
	  const url = `${this.locationsUrl}/${id}`;
		console.log('loc-service getLoc url: ' + url);
		console.log('loc-service getLoc id: ' + id);

	  return this.http.get<Loc>(url).pipe(
		tap(_ => this.log(`fetched loc id=${id}`)),
		catchError(this.handleError<Loc>(`getLoc id=${id}`))
	  );
	}

	/** Log a LocService message with the MessageService */
	private log(message: string) {
	  this.messageService.add('LocService: ' + message);
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

	/* GET locations whose name contains search term */
	searchLocations(term: string): Observable<Loc[]> {
	  if (!term.trim()) {
		// if not search term, return empty loc array.
		return of([]);
	  }
	  return this.http.get<Loc[]>(`api/locations/?name=${term}`).pipe(
		tap(_ => this.log(`found locations matching "${term}"`)),
		catchError(this.handleError<Loc[]>('searchLocations', []))
	  );
	}

}
