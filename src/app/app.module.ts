import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InstnCalendarComponent } from './instn-calendar/instn-calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    InstnCalendarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
