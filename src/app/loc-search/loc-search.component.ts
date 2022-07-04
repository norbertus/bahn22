import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Loc } from '../loc';
//import { LocService } from '../loc.service';
import { LocationDataproviderService } from '../location-dataprovider.service';

@Component({
  selector: 'app-loc-search',
  templateUrl: './loc-search.component.html',
  styleUrls: [ './loc-search.component.css' ]
})
export class LocSearchComponent implements OnInit {
  locations$: Observable<Loc[]>;
  private searchTerms = new Subject<string>();

  //constructor(private locService: LocService) {}
  constructor(private locDataService: LocationDataproviderService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.locations$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.locDataService.searchLocations(term)),
    );
  }
}
