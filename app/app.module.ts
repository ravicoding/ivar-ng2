import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {IvarGridComponent} from './components/ivargrid/ivargrid.component';
import {IvarPieComponent} from './components/ivarpie/ivarpie.component';
import {GoogleChart} from './components/ivarpie/chart.directive'


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent,GoogleChart,IvarGridComponent,IvarPieComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
