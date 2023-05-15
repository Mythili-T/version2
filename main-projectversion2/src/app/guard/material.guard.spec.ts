import { TestBed } from '@angular/core/testing';

import { MaterialGuard } from './material.guard';

describe('MaterialGuard', () => {
  let guard: MaterialGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MaterialGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
