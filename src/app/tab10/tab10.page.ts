import { Component, OnInit } from '@angular/core';
import { LinkItem } from '../interfaces/LinkItem';

@Component({
  selector: 'app-tab10',
  templateUrl: './tab10.page.html',
  styleUrls: ['./tab10.page.scss'],
})
export class Tab10Page implements OnInit { // really though this items should be from a json file

  linkItem: LinkItem[] = [{
    name: 'Limbo',
    link: 'https://www.youtube.com/watch?v=v6-cp0zOxY4',
    img: "./assets/Images/Jefferen_laundry_website_design_64f1e42d-7442-4f44-90ab-0183742b5e62.png", // if no img use defualt image
  },
  {
    name: 'Just friends',
    link: 'https://www.youtube.com/watch?v=iri5v8xX10w',
    img: "./assets/Images/Jefferen_laundry_website_design_64f1e42d-7442-4f44-90ab-0183742b5e62.png"
  }];


  constructor() { }

  ngOnInit() {

    // you can iterate a given number of times and just use the same item
    // need to be able to change the link, maybe even the image as well and change the title, or even the rows and all that

  }

}
