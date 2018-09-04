import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// import Observable related code
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable({
  providedIn: 'root'
})
export class InfoService {

  public allBooks;
  public currentBook;
  public baseUrl = 'https://www.anapioficeandfire.com/api';


  constructor(private _http: HttpClient) {
    console.log('service is called');
  }

  getAllBooks(): any {
    let myResponse = this._http.get(this.baseUrl + '/books');
    console.log(myResponse);
    return myResponse;

  }

  getAllCharacters(): any {
    let myResponse = this._http.get(this.baseUrl + '/characters');
    console.log(myResponse);
    return myResponse;
  }

  getAllHouses(): any {
    let myResponse = this._http.get(this.baseUrl + '/houses');
    console.log('house:' + myResponse);
    return myResponse;

  }

  getSingleBookInformation(currentBookName): any {
    let myResponse = this._http.get(this.baseUrl + '/books?name=' + currentBookName);
    console.log(myResponse);
    return myResponse;

  }

  getSingleHouseInformation(currentHouse): any {
    let myResponse = this._http.get(this.baseUrl + '/houses?name=' + currentHouse);
    console.log(myResponse);
    return myResponse;

  }

  getSingleCharacterInformation(currentCharacterAliases): any {

  }


}
