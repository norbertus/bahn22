import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsComponent }      from './locations/locations.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { LocDetailComponent }  from './loc-detail/loc-detail.component';
import { TimetableComponent }      from './timetable/timetable.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: LocDetailComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'timetable/:id', component: TimetableComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {
}
