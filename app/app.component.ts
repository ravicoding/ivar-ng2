import { Component } from '@angular/core';
import {IvarGridComponent} from './components/ivargrid/ivargrid.component';
import {IvarPieComponent} from './components/ivarpie/ivarpie.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html',
    directives:[IvarGridComponent,IvarPieComponent]

})
export class AppComponent { }
