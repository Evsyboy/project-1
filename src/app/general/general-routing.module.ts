import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './general.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralRoutingModule {}
