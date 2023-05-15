import { TestBed } from '@angular/core/testing';

import { SMMSGuard } from './smms.guard';

describe('SMMSGuard', () => {
  let guard: SMMSGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SMMSGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
