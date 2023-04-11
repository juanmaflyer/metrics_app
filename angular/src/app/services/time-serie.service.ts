import { HttpClient } from '@angular/common/http';
import { Injectable, Query } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeSerieService {

  metricsUrl = 'http://localhost:3000/api/v1/time_series';

  constructor(private http: HttpClient) { }

  getTimeSeries(metricId: number) {
    return this.http.get(this.metricsUrl, { params: { metric_id: metricId } });
  }
}
