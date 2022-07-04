import { Component, OnInit } from '@angular/core';
import { Loc } from '../loc';
import { LocService } from '../loc.service';
import { LocationDataproviderService } from '../location-dataprovider.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  locations: Loc[] = [];

 // nn 22.12.2017 keine schoene Loesung
 // aber LocationDataproviderService muss schon mal initialisiert werden
 // sonst wird bei der ersten Suche nichts gefunden
  constructor(
      private locService: LocService,
      private locDataService: LocationDataproviderService)
      { }

  ngOnInit() {
    this.getLocations();

    // das muss nur initialisiert werden fuer die Suche
    this.getLocationsProvider();
  }

  getLocations(): void {
    this.locService.getLocations()
      .subscribe(locations => this.locations = locations);
  }

  getLocationsProvider(): void {
    this.locDataService.getLocations();
  }
}
