import { TestBed } from '@angular/core/testing';

import { ZeiterfassungService } from './zeiterfassung.service';

describe('ZeiterfassungService', () => {
  let service: ZeiterfassungService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZeiterfassungService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
