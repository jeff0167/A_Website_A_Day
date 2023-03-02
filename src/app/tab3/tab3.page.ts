import { Component } from '@angular/core';
import { StarwarsService } from '../services/starwars.service';
import { People } from '../interfaces/people';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page{

  public person!: People;
  public data = -1090;

  list: string[] = [];

  constructor(public starWarsService: StarwarsService) {
  }

  generateArray(obj: any){ // can't seem to make it use type people, and because of it a lot of errors are thrown
    return Object.keys(obj).map((key)=>{ return {key:key, value:obj[key]}});
}

  ngOnInit(){
    this.starWarsService.getPeople().then(people => this.person = people); // i already did do a then, so why is there still a promise?

    setInterval(()=> {
      this.data += 0.5;
      if(this.data > 10000){
        this.data = 0;
      }
    }, 5) // it gets called a lot technically, hmm
  }
}
