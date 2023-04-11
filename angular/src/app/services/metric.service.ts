import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MetricService {

  metricsUrl = 'http://localhost:3000/api/v1/metrics';

  constructor(private http: HttpClient) { }

  getMetrics() {
    return this.http.get(this.metricsUrl);
  }
}
