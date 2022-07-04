import { TestBed } from '@angular/core/testing';

import { MyWatchedShowsResolver } from './my-watched-shows.resolver';

describe('MyWatchedShowsResolver', () => {
  let resolver: MyWatchedShowsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MyWatchedShowsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
