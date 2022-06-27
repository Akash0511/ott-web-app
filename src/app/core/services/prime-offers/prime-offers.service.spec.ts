import { TestBed } from '@angular/core/testing';

import { PrimeOffersService } from './prime-offers.service';

describe('PrimeOffersService', () => {
  let service: PrimeOffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimeOffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
