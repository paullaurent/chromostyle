import { TestBed, inject } from '@angular/core/testing';

import { CheckMobileService } from './check-mobile.service';

describe('CheckMobileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckMobileService]
    });
  });

  it('should be created', inject([CheckMobileService], (service: CheckMobileService) => {
    expect(service).toBeTruthy();
  }));
});
