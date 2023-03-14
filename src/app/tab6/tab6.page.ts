import { Component, OnInit } from '@angular/core';
import { random } from 'lodash';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page implements OnInit {

  posx: any;
  posy: any;

  animate = false;

  constructor() { 

  }

  ngOnInit() {
    //setInterval(this.NewPos,100); // this will change the values, but the html wont update
  }

  NewPos(){
    this.posx = random(-3840,3840) / 3.3;  // use window size? windoc.screenX does not work
    this.posy = random(-2160,2160) / 3.3;
    this.animate = true;

    setTimeout(this.AnimDone, 4000); // disable anim, change class name

    //alert(this.posx + " " + this.posy);
  }

  AnimDone(){
    this.animate = false;
   // alert("anim done");
  }

  AnimateMovement(){

  }

}
