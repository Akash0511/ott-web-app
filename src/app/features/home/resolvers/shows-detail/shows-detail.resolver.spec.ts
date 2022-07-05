import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { ShowsService } from 'src/app/core/services/shows/shows.service';

import { ShowsDetailResolver } from './shows-detail.resolver';

describe('ShowsDetailResolver', () => {
  let resolver: ShowsDetailResolver;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ShowsService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    resolver = TestBed.inject(ShowsDetailResolver);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.expectOne('/assets/templates/' + 'shows.json').flush(null, { status: 200, statusText: 'Ok' });
    backend.verify();
  }));
  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
