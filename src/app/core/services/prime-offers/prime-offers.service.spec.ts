import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { PrimeOffersService } from './prime-offers.service';

describe('PrimeOffersService', () => {
  let service: PrimeOffersService;
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
    service = TestBed.inject(PrimeOffersService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.expectOne('/assets/templates/' + 'prime-offers.json').flush(null, { status: 200, statusText: 'Ok' });
    backend.verify();
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
