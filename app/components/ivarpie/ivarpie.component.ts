import {Component} from '@angular/core';
import {GoogleChart} from './chart.directive';

@Component({
  selector: 'ivar-pie',
  template: `<div id="pie_chart" [chartData]="pie_ChartData" [chartOptions] = "pie_ChartOptions" chartType="PieChart" GoogleChart></div>`,
  declaration:[GoogleChart]
})
export class IvarPieComponent {

  public pie_ChartData = [
    ['Region', 'Number of Cases'],
    ['New york',     11],
    ['Boston',      2],
    ['Washington DC',  2],
    ['San Francisco', 2],
    ['Dallas',    17] ];

  public pie_ChartOptions  = {
    title: 'Executive Cases',
    width: 500,
    height: 400
  };
}
