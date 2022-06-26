import { TestBed } from '@angular/core/testing';

import { ShowsDetailResolver } from './shows-detail.resolver';

describe('ShowsDetailResolver', () => {
  let resolver: ShowsDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ShowsDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
