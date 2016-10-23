import { Component,OnInit,OnDestroy  } from '@angular/core';

declare var jQuery:any;



export class SCol {
  type : String;
  val  : String;
  editable : Boolean;
}

@Component({
  selector: 'ivar-spreadsheet',
  templateUrl: 'app/components/ivarspreadsheet/spreadsheet.template.html'
})
export class IvarSpreadSheetComponent  implements OnInit,OnDestroy  {

  cols:SCol[] = [
    { type: "text",
      val : "",
      editable: false},
    { type: "text",
      val : "A",
      editable: true},
    { type: "text",
      val : "B",
      editable: true},
    { type: "text",
      val : "C",
      editable: true},
    { type: "text",
      val : "D",
      editable: true},
    { type: "text",
      val : "E",
      editable: true},
    { type: "text",
      val : "F",
      editable: true},
    { type: "text",
      val : "G",
      editable: true}
  ];


  totalRows:number = 20;
  totalCols:number = 8;

  rows:string[][] = [];

  constructor() {
      for(var i=0; i < this.totalRows;++i) {
        this.rows[i] = Array(8).fill("");
        this.rows[i][0] =""+i;
      }
     console.log(this.rows);
  }

  ngOnInit() {
    var cols = localStorage.getItem("cols");
    var rows = localStorage.getItem("rows");
    if(cols) {
      this.cols = JSON.parse(cols);
    }
    if(rows) {
      this.rows = JSON.parse(rows);
    }
    console.log("OnInit");
    console.log(rows);

  }

  onSelect(event,index,rowIndex,row) {
     console.log(index);
    console.log(rowIndex);
     if(index != 0) {
       var target = event.target || event.srcElement || event.currentTarget;
       console.log(target);
     }
    console.log(rowIndex);
    this.rows[rowIndex][index] = jQuery(target).val();
    localStorage.setItem("rows", JSON.stringify(this.rows));
    localStorage.setItem("cols",JSON.stringify(this.cols));
  }

  ngOnDestroy() {

  }


}
