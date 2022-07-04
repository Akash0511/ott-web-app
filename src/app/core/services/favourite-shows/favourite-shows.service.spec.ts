import { TestBed } from '@angular/core/testing';

import { FavouriteShowsService } from './favourite-shows.service';

describe('FavouriteShowsService', () => {
  let service: FavouriteShowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriteShowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
