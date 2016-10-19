import { Component } from '@angular/core';
import {IvarGridComponent} from './components/ivargrid/ivargrid.component';
import {IvarPieComponent} from './components/ivarpie/ivarpie.component';
import {IvarSpreadSheetComponent} from './components/ivarspreadsheet/ivarspreadsheet.component';
import {Draggable} from './directives/draggable.directive';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html',
    directives:[IvarGridComponent,IvarPieComponent,IvarSpreadSheetComponent]

})
export class AppComponent { }
