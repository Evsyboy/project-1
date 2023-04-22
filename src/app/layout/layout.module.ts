import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';

import {MenuModule} from "./menu/menu.module";

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule,MenuModule],
})
export class LayoutModule {}
