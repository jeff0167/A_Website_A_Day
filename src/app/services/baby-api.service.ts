import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BabyData } from '../interfaces/BabyData';
import * as _ from 'lodash';

import { environment } from 'src/environments/environment';

import { interval, take, lastValueFrom, retry, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BabyAPIService {

  public people: any;

  baseUrl = 'http://localhost:33463/api/BabyData/'; 

  baseUrl2 = 'https://bob-tours-app-6c3d9-default-rtdb.europe-west1.firebasedatabase.app/.json';

  constructor(private http: HttpClient) { 

  }


  /// SOLUTION?!!?!??!?!
  /// https://github.com/firebase/firebase-js-sdk/issues/6993

  initialize() {
    //this.getPeople();
  }

  async getPeople() {
    return await this.getRequest()
    .then(data => this.people = data);
  }

  getPeopleLive(): Observable<any> {
    //return this.getRequestLive().then((data) => this.people = data);
    //this.http.get<BabyData>(this.baseUrl).pipe(data => this.people = data, retry(1));
    //alert(this.people);
   // return this.http.get<BabyData>(this.baseUrl2).pipe(retry(1)).subscribe();
    //return this.http.get(this.baseUrl2).pipe(retry(1)).subscribe();


    return this.http.get(`${this.baseUrl2}api_key=${environment.firebase.apiKey}`);

    //return this.getRequestLive();
  }

  async getRequestLive(){
    return await lastValueFrom(this.http.get<BabyData>(this.baseUrl2));
  }

  async getRequest() {
    //let index = Math.max(1, Math.round(Math.random() * 83));
    //let requestUrl = `${this.baseUrl}/people/${index}`;
    //let requestUrl = `${this.baseUrl}`;
    return await lastValueFrom(this.http.get<BabyData>(this.baseUrl));
  }
}
