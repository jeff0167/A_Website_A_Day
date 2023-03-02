import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from '../interfaces/people';
import * as _ from 'lodash';

import { interval, take, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  public people!: People;

  baseUrl = 'https://swapi.dev/api/';  // this also directly takes u to the website, where u can see the api

  constructor(
    private http: HttpClient
  ) { }

  initialize() {
    this.getPeople();
  }

  async getPeople() {
    return await this.getRequest()
    .then(data => this.people = data);
  }

  async getRequest() {
    let index = Math.max(1, Math.round(Math.random() * 83));
    let requestUrl = `${this.baseUrl}/people/${index}`;
    //let requestUrl = `${this.baseUrl}`;
    return await lastValueFrom(this.http.get<People>(requestUrl));
  }
}
