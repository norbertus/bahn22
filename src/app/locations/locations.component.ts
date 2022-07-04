import { Component, OnInit } from '@angular/core';
import { Loc } from '../loc';
//import { HEROES } from '../mock-locations';
import { LocService } from '../loc.service';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  //locations = HEROES;
  locations: Loc[];


  constructor(private locService: LocService) { }

  ngOnInit() {
	this.getLocations();
  }

  getLocations(): void {
    this.locService.getLocations()
        .subscribe(locations => this.locations = locations);
  }  
}
