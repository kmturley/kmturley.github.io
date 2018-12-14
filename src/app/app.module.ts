import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DragScrollModule } from 'ngx-drag-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
