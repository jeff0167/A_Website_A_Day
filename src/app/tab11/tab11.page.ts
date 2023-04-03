import { Component, OnInit } from '@angular/core';
import { BabyAPIService } from '../services/baby-api.service';
import { BabyData } from '../interfaces/BabyData';

@Component({
  selector: 'app-tab11',
  templateUrl: './tab11.page.html',
  styleUrls: ['./tab11.page.scss'],
})
export class Tab11Page implements OnInit {

  public babies: any;

  constructor(public babyService: BabyAPIService) {
    
  }

  generateArray(obj: any){ // can't seem to make it use type people, and because of it a lot of errors are thrown
    return Object.keys(obj).map((key)=>{ return {key:key, value:obj[key]}});
}

  ngOnInit(){ // can u simply subscribe and it will automatic update?!?
    this.babyService.getPeople().then(people => this.babies = people); // i already did do a then, so why is there still a promise?
  }


  vibrate(){ 

    // https://www.npmjs.com/package/angular-vibrator  angular vibrator?

    navigator.vibrate(100); // literally that easy

  }

  
  vibratePattern(){ 
    navigator.vibrate([300,100,300,100]); 
  }

}