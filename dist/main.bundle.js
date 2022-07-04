webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__locations_locations_component__ = __webpack_require__("../../../../../src/app/locations/locations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loc_detail_loc_detail_component__ = __webpack_require__("../../../../../src/app/loc-detail/loc-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__timetable_timetable_component__ = __webpack_require__("../../../../../src/app/timetable/timetable.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_4__loc_detail_loc_detail_component__["a" /* LocDetailComponent */] },
    { path: 'locations', component: __WEBPACK_IMPORTED_MODULE_2__locations_locations_component__["a" /* LocationsComponent */] },
    { path: 'timetable/:id', component: __WEBPACK_IMPORTED_MODULE_5__timetable_timetable_component__["a" /* TimetableComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* AppComponent's private CSS styles */\r\nh1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <mat-toolbar color=\"primary\">\n      <span>&nbsp;{{title}}</span>\n      <span class=\"spacer\"></span>\n\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item>\n          <mat-icon>arrow_back</mat-icon>\n          <span>Abfahrt</span>\n          <mat-icon>directions_railway</mat-icon>\n        </button>\n        <button mat-menu-item>\n          <mat-icon>arrow_forward</mat-icon>\n          <span>Ankunft</span>\n          <mat-icon>directions_railway</mat-icon>\n        </button>\n        <mat-slide-toggle ngModel name=\"menuEnableDebug\">Debug Ausgaben</mat-slide-toggle>\n        <button mat-menu-item>\n          <span>Software Version: 2022c</span>\n        </button>\n      </mat-menu>\n  </mat-toolbar>\n\n\n  <nav>\n    <a mat-button routerLink=\"/dashboard\">Übersicht</a>\n    <a mat-button routerLink=\"/locations\">Liste der Bahnhöfe</a>\n  </nav>\n  <router-outlet></router-outlet>\n  <app-messages></app-messages>\n\n  <div class=\"push\"></div>\n\n <!---   geht leider nicht 12/2017   --->\n <!---\n  <div class=\"footer\">\n        <span> Webtechnologie Beispiel </span>\n        <span class=\"spacer\"></span>\n        <span> © 2018  Norbert Neumann </span>\n  </div>\n-->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Bahn Reise';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_slide_toggle__ = __webpack_require__("../../../material/esm5/slide-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__loc_service__ = __webpack_require__("../../../../../src/app/loc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__timetable_service__ = __webpack_require__("../../../../../src/app/timetable.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__location_dataprovider_service__ = __webpack_require__("../../../../../src/app/location-dataprovider.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__locations_locations_component__ = __webpack_require__("../../../../../src/app/locations/locations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__loc_detail_loc_detail_component__ = __webpack_require__("../../../../../src/app/loc-detail/loc-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__auth_interceptor__ = __webpack_require__("../../../../../src/app/auth.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__loc_search_loc_search_component__ = __webpack_require__("../../../../../src/app/loc-search/loc-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__timetable_timetable_component__ = __webpack_require__("../../../../../src/app/timetable/timetable.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__locations_locations_component__["a" /* LocationsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__loc_detail_loc_detail_component__["a" /* LocDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_16__messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_18__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_21__loc_search_loc_search_component__["a" /* LocSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_22__timetable_timetable_component__["a" /* TimetableComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_17__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_slide_toggle__["a" /* MatSlideToggleModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_slide_toggle__["a" /* MatSlideToggleModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__loc_service__["a" /* LocService */],
                __WEBPACK_IMPORTED_MODULE_10__timetable_service__["a" /* TimetableService */],
                __WEBPACK_IMPORTED_MODULE_11__message_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_12__location_dataprovider_service__["a" /* LocationDataproviderService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_19__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_20__auth_interceptor__["a" /* Authinterceptor */],
                    multi: true,
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Authinterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//let mytoken = "d00f2f7ed5ee5f2509c57191c2ffee77"; // old token from 2016
// new Ids from DB APi Marketplace 2022
var myheadername1 = "DB-Client-Id";
var myclientID = "cd004d4e9a66a4acf24214e418868f0e";
var myheadername2 = "DB-Api-Key";
var myclientSecretID = "a9f929ad7f0c0016d8138b7ee1a6b0bc";
var myheaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]()
    .set(myheadername1, myclientID)
    .append(myheadername2, myclientSecretID)
    .append('Content-Type', 'application/json');
//      .append(myheadername2, myclientSecretID)
//      .append('Content-Type','application/json');
//console.log(myheaders);
var Authinterceptor = (function () {
    function Authinterceptor() {
    }
    Authinterceptor.prototype.intercept = function (req, next) {
        console.log('Interceptor was called: Authinterceptor');
        var customHeaderRequest = req.clone({
            headers: myheaders
        });
        return next.handle(customHeaderRequest);
        //return next.handle(req);
    };
    Authinterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], Authinterceptor);
    return Authinterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/bahn-helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BahnHelper; });
var BahnHelper = (function () {
    function BahnHelper() {
    }
    // aim: Umformung datum nach BahnDatum String
    // beipiel return "171210/18"    "YYMMDD/HH"
    // wobei einzelen Tage mit führender Null
    // input:
    // return:
    BahnHelper.prototype.convertDateTimeToURLExt = function (inpDate) {
        var actHH = inpDate.getHours();
        var actDD = inpDate.getDate();
        var actMM = inpDate.getMonth() + 1; // achtung +1 notwendig
        var actYYYY = inpDate.getFullYear();
        // Jahr zweistellig machen
        var actYY = (actYYYY - 2000).toString();
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
        return actYYStr + actMMStr + actDDStr + '/' + actHHStr;
    };
    BahnHelper.prototype.convertBahnDateTimeStrToDate = function (inpBahnDateStr) {
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
        var myNewDate = new Date(myyearint, (mymonthint - 1), mydayint, myhourint, myminuteint);
        return myNewDate;
    };
    return BahnHelper;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* DashboardComponent's private CSS styles */\r\n[class*='col-'] {\r\n  float: left;\r\n  padding-right: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n[class*='col-']:last-of-type {\r\n  padding-right: 0;\r\n}\r\na {\r\n  text-decoration: none;\r\n}\r\n*, *:after, *:before {\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\nh3 {\r\n  text-align: center;\r\n  margin-bottom: 0;\r\n  /* nn added */\r\n  color: #607d8b;\r\n}\r\nh4 {\r\n  position: relative;\r\n}\r\n.grid {\r\n  margin: 0;\r\n}\r\n.col-1-4 {\r\n  width: 25%;\r\n}\r\n.module {\r\n  padding: 20px;\r\n  text-align: center;\r\n  color: #eee;\r\n  max-height: 120px;\r\n  min-width: 120px;\r\n/*  background-color: #607D8B; */\r\n/* blau aus indigo themes #3F51B5 */\r\n  background-color: #3F51B5;\r\n  border-radius: 2px;\r\n}\r\n.module:hover {\r\n  background-color: #EEE;\r\n  cursor: pointer;\r\n  color: #607d8b;\r\n}\r\n.grid-pad {\r\n  padding: 10px 0;\r\n}\r\n.grid-pad > [class*='col-']:last-of-type {\r\n  padding-right: 20px;\r\n}\r\n@media (max-width: 600px) {\r\n  .module {\r\n    font-size: 10px;\r\n    max-height: 75px; }\r\n}\r\n@media (max-width: 1024px) {\r\n  .grid {\r\n    margin: 0;\r\n  }\r\n  .module {\r\n    min-width: 60px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Top Bahnhöfe</h3>\n<div class=\"grid grid-pad\">\n\t  <a mat-button *ngFor=\"let loc of locations | slice:1:5\" class=\"col-1-4\"\n\t\t  routerLink=\"/timetable/{{loc.idLoc}}\">\n\t\t<div class=\"module loc\">\n\t\t  <h4>{{loc.name}}</h4>\n\t\t</div>\n\t  </a>\n</div>\n\n<app-loc-search></app-loc-search>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loc_service__ = __webpack_require__("../../../../../src/app/loc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_dataprovider_service__ = __webpack_require__("../../../../../src/app/location-dataprovider.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    // nn 22.12.2017 keine schoene Loesung
    // aber LocationDataproviderService muss schon mal initialisiert werden
    // sonst wird bei der ersten Suche nichts gefunden
    function DashboardComponent(locService, locDataService) {
        this.locService = locService;
        this.locDataService = locDataService;
        this.locations = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getLocations();
        // das muss nur initialisiert werden fuer die Suche
        this.getLocationsProvider();
    };
    DashboardComponent.prototype.getLocations = function () {
        var _this = this;
        this.locService.getLocations()
            .subscribe(function (locations) { return _this.locations = locations; });
    };
    DashboardComponent.prototype.getLocationsProvider = function () {
        this.locDataService.getLocations();
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__loc_service__["a" /* LocService */],
            __WEBPACK_IMPORTED_MODULE_2__location_dataprovider_service__["a" /* LocationDataproviderService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/loc-detail/loc-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loc-detail/loc-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loc\">\n\n  <h2>{{ loc[0].name | uppercase }} Details</h2>\n  <div><span>id: </span>{{loc[0].idLoc}}</div>\n  <div>\n    <label>name:\n      <input [(ngModel)]=\"loc[0].name\" placeholder=\"name\"/>\n    </label>\n  </div>\n  <button (click)=\"save()\">save</button>\n  <button (click)=\"goBack()\">go back</button>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/loc-detail/loc-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loc_service__ = __webpack_require__("../../../../../src/app/loc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loc__ = __webpack_require__("../../../../../src/app/loc.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocDetailComponent = (function () {
    function LocDetailComponent(route, locService, location) {
        this.route = route;
        this.locService = locService;
        this.location = location;
    }
    LocDetailComponent.prototype.ngOnInit = function () {
        this.getLoc();
    };
    LocDetailComponent.prototype.getLoc = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.locService.getLoc(id)
            .subscribe(function (loc) { return _this.loc = loc; });
        //console.log('loc-detail getLoc result: ' + JSON.stringify(this.loc));
    };
    LocDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__loc__["a" /* Loc */])
    ], LocDetailComponent.prototype, "loc", void 0);
    LocDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loc-detail',
            template: __webpack_require__("../../../../../src/app/loc-detail/loc-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/loc-detail/loc-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__loc_service__["a" /* LocService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], LocDetailComponent);
    return LocDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/loc-search/loc-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loc-search/loc-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n  <h4>Bahnhofs Suche</h4>\n\n  <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\n\n  <ul class=\"search-result\">\n    <li *ngFor=\"let loc of locations$ | async\" >\n      <a routerLink=\"/timetable/{{loc.idLoc}}\">\n        {{loc.name}}\n      </a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/loc-search/loc-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_dataprovider_service__ = __webpack_require__("../../../../../src/app/location-dataprovider.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { LocService } from '../loc.service';

var LocSearchComponent = (function () {
    //constructor(private locService: LocService) {}
    function LocSearchComponent(locDataService) {
        this.locDataService = locDataService;
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    // Push a search term into the observable stream.
    LocSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    LocSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.locations$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* debounceTime */])(300), 
        // ignore new term if same as previous term
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* distinctUntilChanged */])(), 
        // switch to new search observable each time the term changes
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* switchMap */])(function (term) { return _this.locDataService.searchLocations(term); }));
    };
    LocSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loc-search',
            template: __webpack_require__("../../../../../src/app/loc-search/loc-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/loc-search/loc-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__location_dataprovider_service__["a" /* LocationDataproviderService */]])
    ], LocSearchComponent);
    return LocSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/loc.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { HEROES } from './mock-locations';



var LocService = (function () {
    function LocService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        //private locationsUrl = 'api/locations';  // URL to web api
        //private locationsUrl = 'http://localhost:3000/getlocs/';
        //private locationsUrl = 'https://api.deutschebahn.com/bahnhofsfotos/v1/de/stations';
        //private locationsUrl = 'https://api.deutschebahn.com/freeplan/v1/location/B';
        this.locationsSearchUrl = 'https://api.deutschebahn.com/freeplan/v1/location/';
        this.locationsUrl = '../assets/locations.json';
    }
    /** GET locations from the server */
    LocService.prototype.getLocations = function () {
        var _this = this;
        return this.http.get(this.locationsUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* tap */])(function (locations) { return _this.log("fetched locations tab"); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('getLocations', [])));
    };
    /*
    getLoc(id: number): Observable<Loc> {
      // Todo: send the message _after_ fetching the loc
      this.messageService.add(`LocService: fetched loc id=${id}`);
      return of(HEROES.find(loc => loc.id === id));
    }
    */
    /** GET loc by id. Will 404 if id not found */
    LocService.prototype.getLoc = function (id) {
        var _this = this;
        var url = this.locationsUrl + "/" + id;
        console.log('loc-service getLoc url: ' + url);
        console.log('loc-service getLoc id: ' + id);
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* tap */])(function (_) { return _this.log("fetched loc id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError("getLoc id=" + id)));
    };
    /** Log a LocService message with the MessageService */
    LocService.prototype.log = function (message) {
        this.messageService.add('LocService: ' + message);
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    LocService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    /* GET locations whose name contains search term */
    LocService.prototype.searchLocations = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty loc array.
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])([]);
        }
        return this.http.get("api/locations/?name=" + term).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* tap */])(function (_) { return _this.log("found locations matching \"" + term + "\""); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('searchLocations', [])));
    };
    LocService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */]])
    ], LocService);
    return LocService;
}());



/***/ }),

/***/ "../../../../../src/app/loc.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loc; });
var Loc = (function () {
    function Loc() {
    }
    return Loc;
}());



/***/ }),

/***/ "../../../../../src/app/location-dataprovider.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationDataproviderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loc_service__ = __webpack_require__("../../../../../src/app/loc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
// cache location data
var LocationDataproviderService = (function () {
    function LocationDataproviderService(locService) {
        this.locService = locService;
    }
    LocationDataproviderService.prototype.ngOnInit = function () {
        console.log('LocationDataproviderService ngOnInit');
        this.getLocations();
    };
    LocationDataproviderService.prototype.getLocations = function () {
        var _this = this;
        if (typeof (this.cachedLocations) == 'undefined') {
            this.locService.getLocations()
                .subscribe(function (locations) { return _this.cachedLocations = locations; });
            console.log('LocationDataproviderService getLocations() first');
        }
        else {
            console.log('LocationDataproviderService getLocations()');
        }
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(this.cachedLocations);
    };
    LocationDataproviderService.prototype.getLoc = function (id) {
        console.log('LocationDataproviderService getLoc');
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])({ "name": "dummy", "ds100": "XX", "idLoc": "0", "lon": "0", "lat": "0" });
    };
    LocationDataproviderService.prototype.searchLocations = function (term) {
        if (!term.trim()) {
            // if not search term, return empty loc array.
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])([]);
        }
        if (typeof (this.cachedLocations) == 'undefined') {
            console.log('LocationDataproviderService typeof:' + typeof (this.cachedLocations));
            console.log('LocationDataproviderService getLocations()');
            this.getLocations();
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])([{ "name": "dummy", "ds100": "XX", "idLoc": "0", "lon": "0", "lat": "0" }]);
        }
        //console.log('LocationDataproviderService typeof2:' + typeof(this.cachedLocations));
        if (this.cachedLocations.length > 1) {
            //console.log('LocationDataproviderService liste laenge:' + this.cachedLocations.length);
        }
        var mySortedObjArr = Array.from(this.cachedLocations);
        console.log('LocationDataproviderService typeof myObjArr:' + typeof (mySortedObjArr));
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
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(myFilteredObjArr);
    };
    LocationDataproviderService.prototype.matcharray = function (regexp, array) {
        var filtered = [];
        for (var i = 0; i < array.length; i++) {
            if (regexp.test(array[i].name.toLowerCase())) {
                filtered.push(array[i]);
            }
        }
        return filtered;
    };
    LocationDataproviderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__loc_service__["a" /* LocService */]])
    ], LocationDataproviderService);
    return LocationDataproviderService;
}());



/***/ }),

/***/ "../../../../../src/app/locations/locations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* LocationsComponent's private CSS styles */\n.selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n.locations {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 20em;\n}\n.locations li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .1em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.locations li.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n.locations li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.locations .text {\n  position: relative;\n  top: -3px;\n}\n.locations .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/locations/locations.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Bahnhöfe in Deutschland</h2>\n<ul class=\"locations\">\n\t  <li *ngFor=\"let loc of locations\">\n\t\t<a routerLink=\"/timetable/{{loc.idLoc}}\">\n\t\t  <span class=\"badge\">{{loc.idLoc}}</span> {{loc.name}}\n\t\t</a>\n\t  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/locations/locations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loc_service__ = __webpack_require__("../../../../../src/app/loc.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { HEROES } from '../mock-locations';

var LocationsComponent = (function () {
    function LocationsComponent(locService) {
        this.locService = locService;
    }
    LocationsComponent.prototype.ngOnInit = function () {
        this.getLocations();
    };
    LocationsComponent.prototype.getLocations = function () {
        var _this = this;
        this.locService.getLocations()
            .subscribe(function (locations) { return _this.locations = locations; });
    };
    LocationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-locations',
            template: __webpack_require__("../../../../../src/app/locations/locations.component.html"),
            styles: [__webpack_require__("../../../../../src/app/locations/locations.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__loc_service__["a" /* LocService */]])
    ], LocationsComponent);
    return LocationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages.length = 0;
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n\n  <h2>Messages</h2>\n  <button class=\"clear\"\n          (click)=\"messageService.clear()\">clear</button>\n  <div *ngFor='let message of messageService.messages'> {{message}} </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messages',
            template: __webpack_require__("../../../../../src/app/messages/messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/messages/messages.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/timetable.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimetableService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bahn_helper__ = __webpack_require__("../../../../../src/app/bahn-helper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import * as xml2js from 'xml2js';

var TimetableService = (function () {
    function TimetableService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        // Bsp für plan
        // https://api.deutschebahn.com/timetables/v1/plan/8011160/171203/16
        // Bsp. fchg
        //https://api.deutschebahn.com/timetables/v1/fchg/8011160
        // old Interface 2016 DB Developer
        //  private TimeTablePlanUrlShort = 'https://api.deutschebahn.com/timetables/v1/plan/';
        //  private TimeTableFchgUrlShort = 'https://api.deutschebahn.com/timetables/v1/fchg/';
        // newInterface 2022 DB API Marketplace
        this.TimeTablePlanUrlShort = 'https://apis.deutschebahn.com/db-api-marketplace/apis/timetables/v1/plan/';
        this.TimeTableFchgUrlShort = 'https://apis.deutschebahn.com/db-api-marketplace/apis/timetables/v1/fchg/';
        this.bahnhelper = new __WEBPACK_IMPORTED_MODULE_5__bahn_helper__["a" /* BahnHelper */]();
    }
    // input: id = BahnhofsID
    //       myDate: Datum und Uhrzeit  (volle stunde)
    TimetableService.prototype.getTimetablePlan = function (id, myDate) {
        var _this = this;
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
        return this.http.get(TimeTablePlanUrlFull, { responseType: 'text' })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* tap */])(function (_) { return _this.log("fetched timetable plan hour=" + searchHours + " id=" + id); }) //,
        //catchError(this.handleError<HttpResponse<any>>(`getTimetable id=${id}`))
        );
    };
    TimetableService.prototype.getTimetableFchg = function (id) {
        var _this = this;
        console.log('getTimetableFchg');
        var TimeTableFchgUrlFull = this.TimeTableFchgUrlShort +
            id.toString();
        console.log('TimeTableFchgUrlFull:' + TimeTableFchgUrlFull);
        // Bsp. von
        // https://www.concretepage.com/angular-2/angular-httpclient-get-example
        return this.http.get(TimeTableFchgUrlFull, { responseType: 'text' })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* tap */])(function (_) { return _this.log("fetched timetable fchg id=" + id); }) //,
        //catchError(this.handleError<HttpResponse<any>>(`getTimetable id=${id}`))
        );
    };
    /** Log a LocService message with the MessageService */
    TimetableService.prototype.log = function (message) {
        this.messageService.add('DepartureService: ' + message);
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    TimetableService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    TimetableService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */]])
    ], TimetableService);
    return TimetableService;
}());



/***/ }),

/***/ "../../../../../src/app/timetable/timetable.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tddelayed {\r\n  color: #FF0000;\r\n}\r\n\r\n.tdnotdelayed\r\n{\r\n  /* gruen */\r\n  color: #00FF00;\r\n}\r\n\r\n.tdtofast\r\n{\r\n  /* gruen */\r\n  color: #0101DF;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timetable/timetable.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>\n    <mat-icon>access_time</mat-icon>\n    {{actDisplayTime | date :  \"HH:mm:ss\" }}\n    &nbsp;\n    <mat-icon>directions_railway</mat-icon>\n    Abfahrten \"{{stationname}}\"\n  </h2>\n  Letzte Aktualisierung Fahrplan:{{lastFchgTime | date :  \"HH:mm\"}}\n</div>\n<table class=\"w3-table w3-striped w3-bordered w3-border\">\n  <thead>\n  <tr class=\"w3-light-grey\">\n    <th>Uhrzeit (Plan)</th>\n    <th>(Verspätung)</th>\n    <th>Richtung</th>\n    <th>Zug</th>\n    <th>Bahnsteig</th>\n    <th>Tag</th>\n  </tr>\n  </thead>\n      <tr *ngFor=\"let timetab of timetable\">\n           <td>{{timetab.nnpday | date :  \"HH:mm\" }}</td>\n\n           <div *ngIf=\"timetab.nndelaymmAsInt == 0; else elseBlock\">\n              <td class=\"tdnotdelayed\">{{timetab.nndelaymm}}</td>\n           </div>\n           <ng-template #elseBlock>\n             <div *ngIf=\"timetab.nndelaymmAsInt > 0; else elseBlock2\">\n                <td class=\"tddelayed\">(+{{timetab.nndelaymm}})\n                  <mat-icon>assignment_late</mat-icon>\n                </td>\n             </div>\n           </ng-template>\n           <ng-template #elseBlock2>\n                <td class=\"tdtofast\">(({{timetab.nndelaymm}}))</td>\n           </ng-template>\n\n           <td>{{timetab.nndir}}</td>\n           <td>{{timetab.nnc}}</td>\n           <td>{{timetab.nnpp}}</td>\n           <td>{{timetab.nnpday | date :  \"dd.MM.y\" }}</td>\n      </tr>\n</table>\n<button mat-button (click)=\"getTimetableFchg()\">Verspätungen ermitteln (Fchg)</button>\n<button mat-button (click)=\"removeSomeTimeTableEntrys()\">Tabelle kürzen</button>\n"

/***/ }),

/***/ "../../../../../src/app/timetable/timetable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimetableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timetable_service__ = __webpack_require__("../../../../../src/app/timetable.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_xml_js__ = __webpack_require__("../../../../xml-js/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_xml_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_xml_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bahn_helper__ = __webpack_require__("../../../../../src/app/bahn-helper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TimetableComponent = (function () {
    function TimetableComponent(route, timetableService, location) {
        this.route = route;
        this.timetableService = timetableService;
        this.location = location;
        this.MaxTimeTableDS = 10;
        this.bahnhelper = new __WEBPACK_IMPORTED_MODULE_5__bahn_helper__["a" /* BahnHelper */]();
    }
    TimetableComponent.prototype.ngOnInit = function () {
        // erst mal vorbelegen
        this.actDisplayTime = new Date();
        // timer intervall setzen
        this.setActDisplayTimer();
        // alle 2 min aenderungen holen
        this.lastFchgTime = new Date();
        this.setTimerFchg();
        // alle Stunde neue Daten holen
        this.lastPlanTime = new Date();
        this.setTimerPlan();
        // Daten fuer aktuelle Stunde holen
        var searchDate = new Date();
        this.getTimetablePlan(searchDate);
        // Daten für eine Stunde später holen
        searchDate.setHours(searchDate.getHours() + 1);
        this.getTimetablePlan(searchDate);
        // letzte aktualisierung FChg holen und anzeigen
        this.getTimetableFchg();
    };
    TimetableComponent.prototype.getTimetablePlan = function (myDate) {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.timetableService.getTimetablePlan(id, myDate)
            .subscribe(function (res) {
            //console.log('Erg:' + res);
            var fullresjson = _this.extractDataPlan(res);
            console.log('getTimetablePlan typoff(this.timetable):' + typeof (_this.timetable));
            if (_this.timetable) {
                console.log('getTimetablePlan defined - append data');
                // Ergebnis an timetable anhängen
                if (fullresjson.length) {
                    // es kann sein das die Daten nicht angehängt werden müssen,
                    // sondern vorne eingefügt werden müssen
                    if (fullresjson.length > 0) {
                        var firstObj = fullresjson[0];
                        var firstOpjPtDate = _this.bahnhelper.convertBahnDateTimeStrToDate(firstObj.nnpt);
                        var appendToTimetable = false;
                        if (_this.isLastTimeTableEntryEarlyer(firstOpjPtDate)) {
                            appendToTimetable = true;
                        }
                        // appendToTimetable = false - Meaning: insert data in front of timetable
                        // appendToTimetable = true - Meaning: appen data to timetable
                        _this.appendToTimetable(fullresjson, appendToTimetable);
                    }
                }
                else {
                    console.log('getTimetablePlan fullresjson.length==0');
                }
            }
            else {
                console.log('getTimetablePlan add first plan data');
                _this.timetable = fullresjson;
                console.log('timetable plan: station:' + _this.stationname);
            }
            //this.stationname will set inside  extractDataPlan
        });
        //console.log('loc-detail getLoc result: ' + JSON.stringify(this.loc));
    };
    TimetableComponent.prototype.extractDataPlan = function (xmlTxtData) {
        var newProp_nnid = "nnpid";
        var newProp_nnc = "nnc";
        var newProp_nnpp = "nnpp";
        var newProp_nnpday = (new Date).getTime().toString();
        var newProp_nnpt = "nnpt";
        var newProp_nndir = "nndir";
        var newProp_nndelaymm = "0";
        var newProp_nndelaymmAsInt = 0;
        //let myNewObj = {"timetable":{"s":[], "station":""}};
        var myNewObj = { "s": [] };
        var myresult = __WEBPACK_IMPORTED_MODULE_4_xml_js__["xml2js"](xmlTxtData, { compact: true, ignoreDeclaration: true });
        //console.log('Erg xml2js:');
        //console.log(myresult);
        if (typeof (myresult.timetable.s) === 'undefined') {
            // nichts gefunden
            return;
        }
        // station name setzen
        console.log('typeof(myresult.timetable.station:' + typeof (myresult.timetable._attributes.station));
        if (typeof (myresult.timetable._attributes.station) === 'string') {
            this.stationname = myresult.timetable._attributes.station;
            console.log('timetable station name setzen auf:' + this.stationname);
        }
        // daten sortieren  //TODO
        //let myNewTimeArr = Array.from(myresult.timetable.s);
        var myNewTimeArrOrig = myresult.timetable.s;
        //myNewTimeArr.sort(function(a., b){return a-b});
        console.log('myNewTimeArr');
        console.log(myNewTimeArrOrig);
        // nur datensaetze berücksichtigen mit dp
        var myNewTimeArrOnlyDp = [];
        var myDpCounter = 0;
        for (var i = 0; i < myNewTimeArrOrig.length; i++) {
            var myTimeObjLine = myNewTimeArrOrig[i];
            if (typeof (myTimeObjLine.dp) === 'undefined') {
                continue;
            }
            myDpCounter += 1;
            //console.log('Nr. DS mit dp:' + myDpCounter);
            myNewTimeArrOnlyDp.push(myTimeObjLine);
        }
        var actDate = new Date();
        // filter only current datasets dp pt (=planed time)
        var oldestRemovedArr = [];
        for (var i = 0; i < myNewTimeArrOnlyDp.length; i++) {
            var myTimeObjLine2 = myNewTimeArrOnlyDp[i];
            if (myTimeObjLine2.dp._attributes.pt) {
                var bahnDate = this.bahnstrDatetoDate(myTimeObjLine2.dp._attributes.pt);
                //console.log('bahnDate: ' + bahnDate);
                //console.log('actDate: ' + actDate);
                //console.log('bahnDateMilli: ' + bahnDate.getTime());
                //console.log('actDateMilli: ' + actDate.getTime());
                if (bahnDate.getTime() > actDate.getTime()) {
                    //console.log('bahnDate > actdate');
                    oldestRemovedArr.push(myTimeObjLine2);
                }
            }
        }
        console.log('oldestRemovedArr');
        console.log(oldestRemovedArr);
        var sortCounter = 0;
        oldestRemovedArr.sort(function (a, b) {
            sortCounter += 1;
            //console.log('sortCounter: ' + sortCounter);
            //console.log('a: ' + JSON.stringify(a));
            //console.log('b: ' + JSON.stringify(b));
            if ((typeof (a.dp) === 'undefined') || (typeof (b.dp) === 'undefined')) {
                //console.log('a.dp:' + JSON.stringify(a.dp));
                //console.log('b.dp:' + JSON.stringify(b.dp));
                //console.log('sort2:');
                return 0;
            }
            if ((typeof (a.dp._attributes.pt) === 'undefined') || (typeof (b.dp._attributes.pt) === 'undefined')) {
                //console.log('a.dp:' + JSON.stringify(a.dp));
                //console.log('b.dp:' + JSON.stringify(b.dp));
                //console.log('sort3:');
                return 0;
            }
            if (a.dp._attributes.pt > b.dp._attributes.pt) {
                //console.log(a.dp._attributes.pt  + '>' + b.dp._attributes.pt);
                return 1;
            }
            if (b.dp._attributes.pt > a.dp._attributes.pt) {
                return -1;
            }
            return 0;
        });
        //console.log('oldestRemovedArr sorted');
        //console.log(oldestRemovedArr);
        for (var i = 0; i < oldestRemovedArr.length; i++) {
            var myDepObj = oldestRemovedArr[i];
            if (typeof (myDepObj.tl) !== 'undefined') {
                //console.log('c:' + myDepObj.tl._attributes.c);  // zug
                newProp_nnc = myDepObj.tl._attributes.c;
            }
            if (typeof (myDepObj.dp) !== 'undefined') {
                //console.log('pt:' + myDepObj.dp._attributes.pt);
                //console.log('sub pt:' + myDepObj.dp._attributes.pt.substring(0, 6));
                newProp_nnpt = myDepObj.dp._attributes.pt;
                var myNewDate = this.bahnhelper.convertBahnDateTimeStrToDate(myDepObj.dp._attributes.pt);
                //console.log(myNewDate);
                var myppth = myDepObj.dp._attributes.ppth;
                var ressplit_ppth = myppth.split("|");
                //console.log('split length:' + ressplit_ppth.length);
                //console.log('last split:' + ressplit_ppth[ressplit_ppth.length - 1]);
                newProp_nnpp = myDepObj.dp._attributes.pp;
                newProp_nnpday = myNewDate.getTime().toString();
                newProp_nndir = ressplit_ppth[ressplit_ppth.length - 1];
                //console.log('id:' + myDepObj._attributes.id);
                newProp_nnid = myDepObj._attributes.id;
            }
            else {
                continue;
                // ohne dp = departure kein Abfahrteintrag
            }
            myNewObj.s.push({
                "nnid": newProp_nnid,
                "nnc": newProp_nnc,
                "nndelaymm": newProp_nndelaymm,
                "nndelaymmAsInt": newProp_nndelaymmAsInt,
                "nnpp": newProp_nnpp,
                "nnpday": newProp_nnpday,
                "nnpt": newProp_nnpt,
                "nndir": newProp_nndir
            });
        }
        //console.log('MyObj:' + JSON.stringify(myNewObj));
        return myNewObj.s; // nur fuer test
    };
    TimetableComponent.prototype.getTimetableFchg = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.timetableService.getTimetableFchg(id)
            .subscribe(function (res) {
            //console.log('Erg Fchg:' + res);
            var fullresFchgjson = _this.extractDataFchg(res);
            //console.log('timetable fchg:' + JSON.stringify(this.timetable));
        });
        //console.log('loc-detail getLoc result: ' + JSON.stringify(this.loc));
    };
    TimetableComponent.prototype.extractDataFchg = function (xmlTxtData) {
        var myNewObj = { "s": [] };
        var myresult = __WEBPACK_IMPORTED_MODULE_4_xml_js__["xml2js"](xmlTxtData, { compact: true, ignoreDeclaration: true });
        //console.log('Erg Fchg xml2js:');
        //console.log(myresult);
        //console.log('typeof myresult:' + typeof(myresult));
        if (typeof (myresult.timetable.s) === 'undefined') {
            // nichts gefunden
            console.log('typeof myresult.timetable.s === undefined');
            return myNewObj.s;
        }
        //console.log("Fchg Anz. s:" +  myresult.timetable.s.length);
        // alle Fchg DS durchgehen
        var mySArr = myresult.timetable.s;
        for (var f = 0; f < mySArr.length; f++) {
            //console.log(' ' + JSON.stringify(mySArr[f]));
            if ((!mySArr[f].dp) ||
                (!mySArr[f].dp._attributes) ||
                (!mySArr[f].dp._attributes.ct)) {
                continue;
            }
            //console.log('mySArr[f].dp._attributes.ct' + mySArr[f].dp._attributes.ct);
            //console.log('typeof dp._attributes.ct: ' + typeof(mySArr[f].dp._attributes.ct));
            //console.log('dp._attributes.ct: ' + mySArr[f].dp._attributes.ct);
            //console.log('typeof id: ' + typeof(mySArr[f]._attributes.id));
            //console.log('       id: ' + mySArr[f]._attributes.id);
            // Timetable aktualisieren
            this.addDelay(mySArr[f]._attributes.id, mySArr[f].dp._attributes.ct);
            //console.log('found:' + mySArr[f]);
        }
    };
    TimetableComponent.prototype.addDelay = function (myid, myct) {
        if (!this.timetable.length) {
            return;
        }
        for (var i = 0; i < this.timetable.length; i++) {
            if (!this.timetable[i].nnid) {
                continue;
            }
            if (this.timetable[i].nnid === myid) {
                //console.log('nnpt    : ' + this.timetable[i].nnpt);
                //console.log('nnpt int: ' + parseInt(this.timetable[i].nnpt));
                //console.log('myct     : ' + myct);
                //console.log('myct int : ' +  parseInt(myct));
                this.timetable[i].nndelaymm = this.calcDelayMinute(myct, this.timetable[i].nnpt);
                this.timetable[i].nndelaymmAsInt = parseInt(this.timetable[i].nndelaymm);
            }
        }
    };
    TimetableComponent.prototype.addDelayTest = function () {
        if (typeof (this.timetable) === 'undefined') {
            return;
        }
        //console.log("typeof timetabel:" + typeof(this.timetable));
        for (var i = 0; i < this.timetable.length; i++) {
            // add new property /verspätung
            this.timetable[i].nndelaymm = i.toString();
            //console.log("nndelaymm:" + this.timetable[i].nndelaymm);
            if (this.timetable[i].nndelaymm === "0") {
                console.log("nndelaymm === 0");
            }
            //console.log("delay i:" + i);
            //console.log("  elem i:" + JSON.stringify(this.timetable[i]));
        }
    };
    // input inp1, inp 2 = string  in  der form:
    // Bsp 1801031826  YYMMDDHHmm
    // return = differenz in minuten
    TimetableComponent.prototype.calcDelayMinute = function (inp1, inp2) {
        var delayStrmm = "0";
        // var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);
        var myInp1YY = inp1.substring(0, 2);
        var myInp1MM = inp1.substring(2, 4);
        var myInp1DD = inp1.substring(4, 6);
        var myInp1HH = inp1.substring(6, 8);
        var myInp1min = inp1.substring(8, 10);
        var myInp2YY = inp2.substring(0, 2);
        var myInp2MM = inp2.substring(2, 4);
        var myInp2DD = inp2.substring(4, 6);
        var myInp2HH = inp2.substring(6, 8);
        var myInp2min = inp2.substring(8, 10);
        var minuendDate = new Date(parseInt(myInp1YY), parseInt(myInp1MM), parseInt(myInp1DD), parseInt(myInp1HH), parseInt(myInp1min));
        var subtrahendDate = new Date(parseInt(myInp2YY), parseInt(myInp2MM), parseInt(myInp2DD), parseInt(myInp2HH), parseInt(myInp2min));
        var diffMilli = minuendDate.getTime() - subtrahendDate.getTime();
        var diffMin = Math.floor((diffMilli / 1000) / 60);
        //console.log('Diff(min) von ' + inp1 + ' und ' + inp2 + '  =' + diffMin);
        return diffMin.toString();
    };
    // helper function
    // inp1,= string  in  der form:
    // Bsp 1801031826  YYMMDDHHmm
    // return = date object
    TimetableComponent.prototype.bahnstrDatetoDate = function (inp1) {
        // var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);
        var myInp1YY = inp1.substring(0, 2);
        var myInp1MM = inp1.substring(2, 4);
        var myInp1DD = inp1.substring(4, 6);
        var myInp1HH = inp1.substring(6, 8);
        var myInp1min = inp1.substring(8, 10);
        var minp1Date = new Date(parseInt('20' + myInp1YY), parseInt(myInp1MM) - 1, parseInt(myInp1DD), parseInt(myInp1HH), parseInt(myInp1min));
        //console.log('minp1Date: ' + minp1Date);
        return minp1Date;
    };
    TimetableComponent.prototype.isTimeTableId = function (newId) {
        for (var k = 0; k < this.timetable.length; k++) {
            var actTimeTableObj = this.timetable[k];
            if (actTimeTableObj.nnid === newId) {
                console.log('isTimeTableId ===: ' + actTimeTableObj.nnid);
                return true;
            }
        }
        return false;
    };
    TimetableComponent.prototype.removeSomeTimeTableEntrys = function () {
        if (!this.timetable) {
            console.log('removeSomeTimeTableEntrys !this.timetable');
            return;
        }
        var countTimeTableDS = this.timetable.length;
        for (var k = this.MaxTimeTableDS; k < countTimeTableDS; k++) {
            this.timetable.pop();
        }
    };
    TimetableComponent.prototype.setActDisplayTimer = function () {
        var _this = this;
        this.actDisplayTimer = setInterval(function () { _this.timerFuncActDisplayTime(); }, 1000);
    };
    TimetableComponent.prototype.timerFuncActDisplayTime = function () {
        this.actDisplayTime = new Date();
    };
    TimetableComponent.prototype.setTimerFchg = function () {
        var _this = this;
        //this.bahntimerFChg = setInterval(function(){ this.timerFuncFchg() }, 1000);
        this.lastFchgTimer = setInterval(function () { _this.timerFuncFchg(); }, 1000 * 60 * 2);
    };
    TimetableComponent.prototype.timerFuncFchg = function () {
        this.lastFchgTime = new Date();
        this.getTimetableFchg();
        this.deleteDepartedLines();
    };
    TimetableComponent.prototype.setTimerPlan = function () {
        var _this = this;
        this.lastPlanTimer = setInterval(function () { _this.timerFuncPlan(); }, 1000 * 60 * 60);
    };
    TimetableComponent.prototype.timerFuncPlan = function () {
        this.lastPlanTime = new Date();
        var searchDate = new Date();
        // Daten fuer eine Stunde im voraus holen
        searchDate.setHours(searchDate.getHours() + 1);
        this.getTimetablePlan(searchDate);
    };
    TimetableComponent.prototype.deleteDepartedLines = function () {
        console.log('deleteDepartedLines');
        if (!this.timetable) {
            console.log('deleteDepartedLines !this.timetable');
            return;
        }
        var actTime = new Date();
        var countTimeTableDS = this.timetable.length;
        for (var k = countTimeTableDS - 1; k >= 0; k--) {
            var actObj = this.timetable[k];
            if (!actObj.nnpt) {
                console.log('!actObj.nnpt fur elem: ' + k);
                continue;
            }
            var mypt = this.bahnhelper.convertBahnDateTimeStrToDate(actObj.nnpt);
            // alle DS entfernen, bei denen die die Abfahrtszeit
            // in der Vergangenheit liegt
            console.log('mypt   : ' + mypt);
            console.log('mypt   : ' + mypt.getTime());
            console.log('actTime: ' + actTime.getTime());
            if (mypt.getTime() < actTime.getTime()) {
                console.log('mypt < actTime: ');
                this.timetable.splice(k, 1);
            }
        }
    };
    TimetableComponent.prototype.isLastTimeTableEntryEarlyer = function (newDate) {
        if (!this.timetable.length) {
            console.log('isLastTimeTableEntryEarlyer !this.timetable.length');
            return false;
        }
        var countTimeTableDS = this.timetable.length;
        var lastObj = this.timetable[countTimeTableDS - 1];
        var lastObjPtDate = this.bahnhelper.convertBahnDateTimeStrToDate(lastObj.nnpt);
        console.log('lastObjPtDate: ' + lastObjPtDate);
        console.log('newDate:       ' + newDate);
        if (lastObjPtDate.getTime() <= newDate.getTime()) {
            console.log('isLastTimeTableEntryEarlyer == true  lastObjPtDate <= newDate: ');
            return true;
        }
        return false;
    };
    // toEnd = true  - es wird antimetabel angehängt
    // toEnd = false  - es wird vorne eingefügt
    //  (entsprechend umgekehrte Reihenfolge)
    TimetableComponent.prototype.appendToTimetable = function (newArr, toEnd) {
        if (!newArr.length) {
            console.log('appendToEndTimetable - no elements');
            return;
        }
        if (toEnd) {
            console.log('appendToEndTimetable - push');
            for (var j = 0; j < newArr.length; j++) {
                var actObj = newArr[j];
                // nur anhängen, wenn element noch nicht vorhanden
                // id Feld prüfen
                if (!this.isTimeTableId(actObj.nnid)) {
                    this.timetable.push(actObj);
                    //console.log('plan plus1 add: ' + j);
                }
            }
        }
        else {
            // vorne einfuegen
            console.log('appendToEndTimetable - unshift');
            for (var j = newArr.length - 1; j >= 0; j--) {
                var actObj = newArr[j];
                // nur anhängen, wenn element noch nicht vorhanden
                // id Feld prüfen
                if (!this.isTimeTableId(actObj.nnid)) {
                    this.timetable.unshift(actObj);
                }
            }
        }
    };
    TimetableComponent.prototype.goBack = function () {
        this.location.back();
    };
    TimetableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-timetable',
            template: __webpack_require__("../../../../../src/app/timetable/timetable.component.html"),
            styles: [__webpack_require__("../../../../../src/app/timetable/timetable.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__timetable_service__["a" /* TimetableService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], TimetableComponent);
    return TimetableComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map