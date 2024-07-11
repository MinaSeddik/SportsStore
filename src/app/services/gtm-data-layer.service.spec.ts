import { TestBed } from '@angular/core/testing';

import { GtmDataLayerService } from './gtm-data-layer.service';

describe('GtmDataLayerService', () => {
  let service: GtmDataLayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GtmDataLayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
