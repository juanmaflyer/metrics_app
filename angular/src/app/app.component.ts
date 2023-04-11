import { Component, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';

import { MetricService } from './services/metric.service';
import { TimeSerieService } from './services/time-serie.service';
import * as metricsData from './data/metrics';

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
  selectedMetric: any = null;
  metricsData = metricsData;
  currentValue: any;

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
    series: [{ data: [], type: 'line' }]
  };

  constructor(private metricService: MetricService, private timeSerieService: TimeSerieService) { }

  ngOnInit() {
    this.metricService.getMetrics()
      .subscribe((metrics: any) => {
        this.metrics = metrics;
      });
  }

  chartCallback: Highcharts.ChartCallbackFunction = chart => {
    this.chartRef = chart;
  };

  addDataPoint() {
    console.log('hola!!!');
    console.log(this.currentValue);
    this.timeSerieService.addDataPoint(this.selectedMetric, this.currentValue)
      .subscribe((resp: any) => {
        console.log(resp);
        this.chartRef.series[0].addPoint([resp.timestamp, resp.value]);
        this.currentValue = null;
      });
  }

  onSelectedMetricChange(event: any) {
    this.selectedMetric = event.target.value;
    this.timeSerieService.getTimeSeries(this.selectedMetric)
      .subscribe((timeSeries: any) => {
        this.loadChart(this.selectedMetric, timeSeries);
      });
  }

  loadChart(metricId: number, timeSeries: number[]) {
    this.chartOptions = {
      chart: {
        zooming: { type: 'x' },
        type: 'line'
      },
      title: {
        text: metricsData.chart_info[metricId].title
      },
      subtitle: {
        text: metricsData.chart_info[metricId].subtitle
      },
      xAxis: {
        type: 'datetime',
        title: {
          text: 'Timestamp'
        }
      },
      yAxis: {
        title: {
          text: metricsData.chart_info[metricId].title
        },
        min: 0
      },
      series: [{
        data: timeSeries,
        type: 'line',
        name: metricsData.chart_info[metricId].title
      }]
    };
  }
}
