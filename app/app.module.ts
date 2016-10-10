import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {IvarGridComponent} from './components/ivargrid/ivargrid.component'


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent,IvarGridComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
