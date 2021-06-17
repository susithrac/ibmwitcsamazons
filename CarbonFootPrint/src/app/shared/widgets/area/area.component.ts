import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit, OnChanges {

  chartOptions: {};
  @Input() data: any = [];

  Highcharts = Highcharts;

  constructor() {
    this.chartOptions = {};
  }

  ngOnInit() {
    /*this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Carbon Footprint'
      },
      subtitle: {
        text: 'Your annual emissions'
      },
      tooltip: {
        split: true,
        valueSuffix: ' Kgs'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true,
      },
      series: this.data
    };

    HC_exporting(Highcharts); */

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);

  }
  ngOnChanges(change: SimpleChanges) {
    if (change.data.currentValue && change.data.currentValue.length > 0) {
      this.chartOptions = {
        chart: {
          type: 'area'
        },
        title: {
          text: 'Carbon Footprint'
        },
        subtitle: {
          text: 'Your annual emissions'
        },
        tooltip: {
          split: true,
          valueSuffix: ' Kgs'
        },
        credits: {
          enabled: false
        },
        exporting: {
          enabled: true,
        },
        series: change.data.currentValue
      };
      HC_exporting(Highcharts);
      //Call Chart Update function here 
    }
    console.log(change);
  }

}
