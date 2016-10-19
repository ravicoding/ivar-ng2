import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {IvarGridComponent} from './components/ivargrid/ivargrid.component';
import {IvarPieComponent} from './components/ivarpie/ivarpie.component';
import {GoogleChart} from './components/ivarpie/chart.directive';
import {Draggable} from './directives/draggable.directive';
import {IvarSpreadSheetComponent} from './components/ivarspreadsheet/ivarspreadsheet.component';


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent,GoogleChart,Draggable,IvarGridComponent,IvarPieComponent,IvarSpreadSheetComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
