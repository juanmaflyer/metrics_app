import { TestBed } from '@angular/core/testing';

import { TimeSerieService } from './time-serie.service';

describe('TimeSerieService', () => {
  let service: TimeSerieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeSerieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
