import { TestBed } from '@angular/core/testing';

import { DashboardGraphService } from './dashboard-graph.service';

describe('DashboardGraphService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardGraphService = TestBed.get(DashboardGraphService);
    expect(service).toBeTruthy();
  });
});
