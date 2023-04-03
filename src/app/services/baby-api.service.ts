import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BabyData } from '../interfaces/BabyData';
import * as _ from 'lodash';

import { interval, take, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BabyAPIService {

  public people: any;

  baseUrl = 'http://localhost:33463/api/BabyData/'; 

  constructor(private http: HttpClient) { 

  }

  initialize() {
    this.getPeople();
  }

  async getPeople() {
    return await this.getRequest()
    .then(data => this.people = data);
  }

  async getRequest() {
    //let index = Math.max(1, Math.round(Math.random() * 83));
    //let requestUrl = `${this.baseUrl}/people/${index}`;
    //let requestUrl = `${this.baseUrl}`;
    return await lastValueFrom(this.http.get<BabyData>(this.baseUrl));
  }
}
