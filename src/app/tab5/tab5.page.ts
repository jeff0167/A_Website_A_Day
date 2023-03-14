import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  @HostListener('document:mousedown', ['$event'])  // hmm, can't get my desire, dragged mouse behaviour
  @HostListener('document:mouseup', ['$event'])  // hmm, can't get my desire, dragged mouse behaviour
  @HostListener('document:mousemove', ['$event'])  // hmm, can't get my desire, dragged mouse behaviour

  onMouseDown(e: any) {
      this.mouseIsDown = true;
      //this.mouseDownX = e.clientX; // i just need to safe this value, ONCE, but no, you can't even do something this simple with this idiotic framework, can't even do mouse drag
  }

  onMouseMove(e: any) {
    if(this.mouseIsDown) {
      
    const delta = this.mouseDownX - e.clientX;
    const maxDelta = window.innerWidth / 2;
    
    const percentage = (delta / maxDelta) * 100;
    this.movePercentage = percentage * -1 - 100;
    }
  }

  onMouseUp(e: any) {
    this.mouseIsDown = false;
  }

  mouseIsDown = false;
  mouseX: number = 0;
  //mouseY: number = 0;
   movePercentage = 0;
   mouseDownX = 0;

  constructor() { 
  }

  ngOnInit() {
  }

}
