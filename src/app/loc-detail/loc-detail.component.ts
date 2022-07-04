import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { LocService }  from '../loc.service';
import { Loc } from '../loc';

@Component({
  selector: 'app-loc-detail',
  templateUrl: './loc-detail.component.html',
  styleUrls: ['./loc-detail.component.css']
})
export class LocDetailComponent implements OnInit {
	@Input() loc: Loc;

	constructor(
		private route: ActivatedRoute,
		private locService: LocService,
		private location: Location
	) {}

	ngOnInit(): void {
	  this.getLoc();
	}

	getLoc(): void {
	  const id = this.route.snapshot.paramMap.get('id');
	  this.locService.getLoc(id)
		.subscribe(loc => this.loc = loc);
    //console.log('loc-detail getLoc result: ' + JSON.stringify(this.loc));
	}

	goBack(): void {
	  this.location.back();
	}

  /*
	save(): void {
	   this.locService.updateLoc(this.loc)
		 .subscribe(() => this.goBack());
	 }
   */
}
