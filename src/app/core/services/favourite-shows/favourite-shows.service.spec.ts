import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { FavouriteShowsService } from './favourite-shows.service';

describe('FavouriteShowsService', () => {
  let service: FavouriteShowsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FavouriteShowsService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(FavouriteShowsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.expectOne('/assets/templates/' + 'shows.json').flush(null, { status: 200, statusText: 'Ok' });
    backend.expectOne('/assets/templates/' + 'fav-watched.json').flush(null, { status: 200, statusText: 'Ok' });
    backend.verify();
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
