import { TestBed } from '@angular/core/testing';

import { AxiosRestDatasourceService } from './axios-rest-datasource.service';

describe('AxiosRestDatasourceService', () => {
  let service: AxiosRestDatasourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AxiosRestDatasourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
