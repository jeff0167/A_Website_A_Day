import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab13PageRoutingModule } from './tab13-routing.module';

import { Tab13Page } from './tab13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab13PageRoutingModule
  ],
  declarations: [Tab13Page]
})
export class Tab13PageModule {}
