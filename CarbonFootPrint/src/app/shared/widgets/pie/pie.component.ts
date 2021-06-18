
import HC_exporting from 'highcharts/modules/exporting';
import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})

export class PieComponent implements OnInit, OnChanges {
  @Input() data = [];
  @Input() chartTitle:string='Title';
  updateFromInput = false;
  chart;
  chartOptions: Highcharts.Options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: this.chartTitle
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: true,
    },
    series: []
  };
  chartConstructor = "chart";
  chartCallback;


  Highcharts = Highcharts;

  constructor() {
    const self = this;

    // saving chart reference using chart callback
    this.chartCallback = chart => {
      self.chart = chart;
    };
  }

  ngOnInit() {

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);

  }

  ngOnChanges(change: SimpleChanges) {
    debugger
    if(change.chartTitle)
    {
      this.chartTitle=change.chartTitle.currentValue;
    }
    if (change.data.currentValue && change.data.currentValue.length > 0) {
      const self = this,
        chart = this.chart;
      chart.showLoading();
        self.updateFromInput = true;
        self.chartOptions.title.text=this.chartTitle;
        self.chartOptions.series = [
          {
                    name: 'Brands',
                    colorByPoint: true,
                    data:  change.data.currentValue,
                    type:undefined
                  }
         ];
        chart.hideLoading();
    }
    console.log(change);
  }

}
