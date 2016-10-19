import { Component } from '@angular/core';


@Component({
  selector: 'ivar-spreadsheet',
  templateUrl: 'app/components/ivarspreadsheet/spreadsheet.template.html'
})
export class IvarSpreadSheetComponent {

  cols:string[] = ["","A","B","C","D","E","F","G","H","I","J","K"];
  totalRows:number = 20;
  totalCols:number = 12;
  rows:string[][] = [];
  constructor() {
      for(var i=0; i < this.totalRows;++i) {
        this.rows[i] = Array(12).map(function(val) {
           return "";
        });
        this.rows[i][0] =""+i;
      }
     console.log(this.rows);

  }

  onSelect($event,index,row) {
    if(index != 0) {
      var target = $event.target || $event.srcElement || $event.currentTarget;
      target.se
    }
  }


}
