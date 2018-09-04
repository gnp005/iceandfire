import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// import Observable related code
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public baseUrl = 'https://www.anapioficeandfire.com/api';

  constructor(private _homeHttp: HttpClient) {
    console.log('service constructor called');

  }
  getAllData(): any {
    let myResponse = this._homeHttp.get(this.baseUrl);
    console.log('home data:' + myResponse);
    return myResponse;
  }
}
