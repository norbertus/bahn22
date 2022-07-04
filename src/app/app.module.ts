import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { LocService } from './loc.service';
import { TimetableService } from './timetable.service';
import { MessageService } from './message.service';
import { LocationDataproviderService } from './location-dataprovider.service';

import { AppComponent } from './app.component';

import { LocationsComponent } from './locations/locations.component';
import { LocDetailComponent } from './loc-detail/loc-detail.component';

import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { Authinterceptor } from './/auth.interceptor';

import { LocSearchComponent } from './loc-search/loc-search.component';
import { TimetableComponent } from './timetable/timetable.component';




@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    LocDetailComponent,
    MessagesComponent,
    DashboardComponent,
    LocSearchComponent,
    TimetableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
	  HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule
  ],
  providers: [ LocService,
    TimetableService,
    MessageService,
    LocationDataproviderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Authinterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
