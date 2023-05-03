import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import {HelloComponent} from "./hello.component";


const generalRoutes: Routes = [
  {
    path: '',
    component: HelloComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(generalRoutes)],
  exports: [RouterModule],
})
export class HelloRoutingModule {}
