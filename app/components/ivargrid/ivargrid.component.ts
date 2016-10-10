import { Component } from '@angular/core'
import {TableService} from './ivargrid.services'


export class Table {
  rows : String[][];
  cols : String[];
}

@Component({
  selector: 'ivar-grid',
  template: '<h3>Ivar Grid</h3>',
  providers :[TableService]
})
export class IvarGridComponent {

   table : Table;
   constructor(private tableService:TableService) {
     this.table = new Table();
     this.table.rows = tableService.getRows();
     this.table.cols = tableService.getCols();
     console.log('This is Table data');
     console.log(this.table);
   }




}
