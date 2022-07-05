import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GetPrimeOffersResolver } from './get-prime-offers.resolver';
import { PrimeOffersService } from 'src/app/core/services/prime-offers/prime-offers.service';

describe('GetPrimeOffersResolver', () => {
  let resolver: GetPrimeOffersResolver;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PrimeOffersService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    resolver = TestBed.inject(GetPrimeOffersResolver);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.expectOne('/assets/templates/' + 'prime-offers.json').flush(null, { status: 200, statusText: 'Ok' });
    backend.verify();
  }));
  
  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
