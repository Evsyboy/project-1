import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './general.component';

const generalRoutes: Routes = [
  {
    path: '',
    component: GeneralComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(generalRoutes)],
  exports: [RouterModule],
})
export class GeneralRoutingModule {}
