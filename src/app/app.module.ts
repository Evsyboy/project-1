import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UIInputModule, UIKitModule} from "@evsyboy/ui-kit";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
