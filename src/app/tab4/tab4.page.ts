import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  // this will look like youtubes page!, using ionic components 

  public checkMark: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  subscribe(){
    alert('Subscribed');
  }

  like(){

  }

  dislike(){
    
  }

}
