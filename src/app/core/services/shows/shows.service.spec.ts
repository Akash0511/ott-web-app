import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { ShowsService } from './shows.service';

describe('ShowsService', () => {
  let service: ShowsService;
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
    service = TestBed.inject(ShowsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.expectOne('/assets/templates/' + 'shows.json').flush(null, { status: 200, statusText: 'Ok' });
    backend.verify();
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
