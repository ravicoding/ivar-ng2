import {Component} from '@angular/core';
import {GoogleChart} from './chart.directive';

@Component({
  selector: 'ivar-pie',
  template: `<div id="pie_chart" [chartData]="pie_ChartData" [chartOptions] = "pie_ChartOptions" chartType="PieChart" GoogleChart></div>`,
  declaration:[GoogleChart]
})
export class IvarPieComponent {

  public pie_ChartData = [
    ['Task', 'Hours per Day'],
    ['Work',     11],
    ['Eat',      2],
    ['Commute',  2],
    ['Watch TV', 2],
    ['Sleep',    7] ];

  public pie_ChartOptions  = {
    title: 'My Daily Activities',
    width: 500,
    height: 400
  };
}
