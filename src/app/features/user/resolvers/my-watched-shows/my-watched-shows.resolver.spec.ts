import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { FavouriteShowsService } from 'src/app/core/services/favourite-shows/favourite-shows.service';

import { MyWatchedShowsResolver } from './my-watched-shows.resolver';

describe('MyWatchedShowsResolver', () => {
  let resolver: MyWatchedShowsResolver;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FavouriteShowsService,
        AuthService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    resolver = TestBed.inject(MyWatchedShowsResolver);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.expectOne('/assets/templates/' + 'shows.json').flush(null, { status: 200, statusText: 'Ok' });
    backend.expectOne('/assets/templates/' + 'fav-watched.json').flush(null, { status: 200, statusText: 'Ok' });
    backend.verify();
  }));

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
