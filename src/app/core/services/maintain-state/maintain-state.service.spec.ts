import { TestBed } from '@angular/core/testing';

import { MaintainStateService } from './maintain-state.service';

describe('MaintainStateService', () => {
  let service: MaintainStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaintainStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
