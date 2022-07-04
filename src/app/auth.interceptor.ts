import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';

//let mytoken = "d00f2f7ed5ee5f2509c57191c2ffee77"; // old token from 2016

// new Ids from DB APi Marketplace 2022
let myheadername1 = "DB-Client-Id";
let myclientID = "cd004d4e9a66a4acf24214e418868f0e";

let myheadername2 = "DB-Api-Key";
let myclientSecretID = "a9f929ad7f0c0016d8138b7ee1a6b0bc";

let myheaders = new HttpHeaders()
      .set(myheadername1, myclientID)
//      .set('Access-Control-Allow-Origin', '*')
      .append(myheadername2, myclientSecretID)
      .append('Content-Type','application/json');

//      .append(myheadername2, myclientSecretID)
//      .append('Content-Type','application/json');

//console.log(myheaders);

@Injectable()
export class Authinterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Interceptor was called: Authinterceptor');
    const customHeaderRequest = req.clone({
      headers: myheaders
    });
    return next.handle(customHeaderRequest);
    //return next.handle(req);
  }
}
