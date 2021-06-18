import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-widget-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
  updateFromInput = false;
  chart;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Future analysis Carbon Footprint'
    },
    subtitle: {
      text: 'Your can reduce your emissions'
    },
    xAxis: {
      categories: ['Housing', 'Traves', 'Food'],
      title: {
          text: null
      }
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Co2 emmisions (millions)',
          align: 'high'
      },
      labels: {
          overflow: 'justify'
      }
  },
    tooltip: {
      split: true,
      valueSuffix: ' Kgs'
    },
    plotOptions: {
      bar: {
          dataLabels: {
              enabled: true
          }
      }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -40,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true
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
    console.log(change);
  }
}
