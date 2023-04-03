import { TestBed } from '@angular/core/testing';

import { BabyAPIService } from './baby-api.service';

describe('BabyAPIService', () => {
  let service: BabyAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BabyAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
