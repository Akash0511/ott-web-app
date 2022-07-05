import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.expectOne('/assets/templates/' + 'user.json').flush(null, { status: 200, statusText: 'Ok' });
    backend.verify();
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
