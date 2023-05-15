/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IncrementService } from './increment.service';

describe('Service: Increment', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IncrementService]
    });
  });

  it('should ...', inject([IncrementService], (service: IncrementService) => {
    expect(service).toBeTruthy();
  }));
});
