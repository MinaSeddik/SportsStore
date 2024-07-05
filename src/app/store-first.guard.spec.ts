import { TestBed } from '@angular/core/testing';

import { StoreFirstGuard } from './store-first.guard';

describe('StoreFirstGuard', () => {
  let guard: StoreFirstGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StoreFirstGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
