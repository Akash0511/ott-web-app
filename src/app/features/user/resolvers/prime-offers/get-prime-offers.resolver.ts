import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { PrimeOffers } from 'src/app/core/interfaces/primeOffers.model';
import { PrimeOffersService } from 'src/app/core/services/prime-offers/prime-offers.service';

@Injectable({
  providedIn: 'root'
})
export class GetPrimeOffersResolver implements Resolve<PrimeOffers[]> {

  constructor(private readonly primeOfferService: PrimeOffersService) {
  }
  resolve(): Observable<PrimeOffers[]> {
    return this.primeOfferService.getAllPrimeOffers();
  }
}
