import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { storeFirst2Guard } from './store-first2.guard';

describe('storeFirst2Guard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => storeFirst2Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
