import { Component } from '@angular/core'
import {TableService} from './ivargrid.services'
import {COL} from './tabledata.mock'


export class Table {
  rows : String[][];
  cols : COL[];
}

@Component({
  selector: 'ivar-grid',
  templateUrl: 'app/components/ivargrid/grid.template.html',
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

   beforeRending() {


   }

   destroy() {

   }


}
