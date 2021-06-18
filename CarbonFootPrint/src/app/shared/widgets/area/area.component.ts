import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

HC_exporting(Highcharts);
@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreaComponent implements OnInit, OnChanges {
  updateFromInput = false;
  chart;
  chartOptions: Highcharts.Options = {
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
    series: []
  };
  chartConstructor = "chart";
  chartCallback;

  @Input() data: any = [];

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
    if (change.data.currentValue && change.data.currentValue.length > 0) {
      const self = this,
        chart = this.chart;
      chart.showLoading();
        self.updateFromInput = true;
        self.chartOptions.series = change.data.currentValue;
        chart.hideLoading();
    }
  }

}
