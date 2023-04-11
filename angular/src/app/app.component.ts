import { Component, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';

import { MetricService } from './services/metric.service';
import { TimeSerieService } from './services/time-serie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('chart') componentRef: any;
  chartRef: any;
  updateFlag: any;
  metrics: any[] = [];
  timeSeries: any[] = [];
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      zooming: { type: 'x' },
      type: 'line'
    },
    title: {
      text: 'Cantidad de hormigas'
    },
    subtitle: {
      text: 'Cuenta la cantidad de hormigas presentes en el nido'
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Timestamp'
      }
    },
    yAxis: {
      title: {
        text: 'Cant. Hormigas'
      },
      min: 0
    },
    series: [{
      // data: [1, 2, 3],
      data: [
        // [1681156980000, 5],
        // [1681160580000, 32],
        // [1681164180000, 25],
        // [1681167780000, 124],
        // [1681244497000, 40]
      ],
      type: 'line',
      name: 'Cant. Hormigas'
    }]
  };

  constructor(private metricService: MetricService, private timeSerieService: TimeSerieService) { }

  ngOnInit() {
    this.metricService.getMetrics()
      .subscribe((metrics: any) => {
        this.metrics = metrics;
      });

    this.timeSerieService.getTimeSeries(1)
      .subscribe((timeSeries: any) => {
        this.timeSeries = timeSeries;
        this.chartRef.series[0].update({
          data: timeSeries
        });
      });
  }

  chartCallback: Highcharts.ChartCallbackFunction = chart => {
    this.chartRef = chart;
  };
}
