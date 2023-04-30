import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab13Page } from './tab13.page';

const routes: Routes = [
  {
    path: '',
    component: Tab13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab13PageRoutingModule {}
