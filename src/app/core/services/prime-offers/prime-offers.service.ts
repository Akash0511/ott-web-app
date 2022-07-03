import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { PrimeOffers } from '../../interfaces/primeOffers.model';

@Injectable({
  providedIn: 'root'
})
export class PrimeOffersService {

  primeOffersList = new BehaviorSubject<PrimeOffers[]>([]);
  readonly PRIME_OFFERS_SERVICE_BASE_URL = '/assets/templates';

  constructor(private readonly http: HttpClient) {
    this.getAllPrimeOffers().subscribe(data => {
      this.primeOffersList.next(data as PrimeOffers[]);
    });
  }

  public getAllPrimeOffers(): Observable<PrimeOffers[]> {
    const url = `${this.PRIME_OFFERS_SERVICE_BASE_URL}/prime-offers.json`;
    return this.http.get<PrimeOffers[]>(url);
  }

  public getPrimeOffers(): Observable<PrimeOffers[]> {
    return this.primeOffersList.asObservable();
  }

  public addPrimeOffers(primeOffersObj: PrimeOffers): Observable<string> {
    const primeOffersList = this.primeOffersList.getValue();

    primeOffersObj.id = (primeOffersList.length + 1).toString();
    primeOffersList.push(primeOffersObj);
    this.primeOffersList.next(primeOffersList);
    return of('Prime offers data added successfully.')
  }
}
