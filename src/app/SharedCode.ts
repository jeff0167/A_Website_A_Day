import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { FavoritesService } from './favorites.service';
import * as _ from 'lodash';

import { interval, take, lastValueFrom, catchError } from 'rxjs';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class BobToursService {

  public regions: any;
  public tourtypes: any;
  public tours: any;
  //   https://bob-tours-app.firebaseio.com/
  baseUrl = 'https://bob-tours-app-6c3d9-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(
    private http: HttpClient,
    //public favService: FavoritesService
  ) { }

  initialize() {
    this.getRegions()
      .then(data => this.regions = data);
    this.getTourtypes()
      .then(data => this.tourtypes = _.sortBy(data, 'Name'));
    // this.getTours()
    //   .then(data => {
    //     this.tours = _.sortBy(data, 'Title');
    //     this.favService.initialize(this.tours);
    //   });
  }

  getRegions() {
    let requestUrl = `${this.baseUrl}/Regions.json`;
    return lastValueFrom(this.http.get(requestUrl));
  }

  async PostRegion(){
    let i = this.postRequest();
    //alert(i.pipe(take(1)).toPromise());
  }

  postRequest(){
    let requestUrl = `${this.baseUrl}/Regions.json`;

    let nameT = "MrT";
    let region2: Region = {"Id": "ZZ", "Icon": "not home", "Name": nameT}

    let u = JSON.stringify(region2);
    let o = '{"Id": "BN", "Icon": "Home", "Name": "James bond33"}';
    JSON.parse(o);

    return this.http.post<Region>(requestUrl, region2).pipe(take(1)).toPromise();
  }
  handleError(arg0: string, region2: Region): (err: any, caught: import("rxjs").Observable<Region>) => import("rxjs").ObservableInput<any> {
    throw new Error('Method not implemented.');
  }

  getTourtypes() {
    let requestUrl = `${this.baseUrl}/Tourtypes.json`;
    return lastValueFrom(this.http.get(requestUrl));
  }

  getTours() {
    let requestUrl = `${this.baseUrl}/Tours.json`;
    return lastValueFrom(this.http.get(requestUrl));
  }

}

export interface Region  {

  "Id": string, "Icon": string, "Name": string 
}
