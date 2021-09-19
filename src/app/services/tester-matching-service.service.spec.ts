import { TestBed } from '@angular/core/testing';

import { TesterMatchingService } from './tester-matching.service';

describe('TesterMatchingServiceService', () => {
  let service: TesterMatchingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TesterMatchingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
