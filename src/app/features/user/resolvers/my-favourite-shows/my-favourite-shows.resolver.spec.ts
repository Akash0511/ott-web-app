import { TestBed } from '@angular/core/testing';

import { MyFavouriteShowsResolver } from './my-favourite-shows.resolver';

describe('MyFavouriteShowsResolver', () => {
  let resolver: MyFavouriteShowsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MyFavouriteShowsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
