import { TestBed } from '@angular/core/testing';

import { GetPrimeOffersResolver } from './get-prime-offers.resolver';

describe('GetPrimeOffersResolver', () => {
  let resolver: GetPrimeOffersResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetPrimeOffersResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
