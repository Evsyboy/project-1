import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UiKitModule} from "@evsyboy/ui-kit";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiKitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
