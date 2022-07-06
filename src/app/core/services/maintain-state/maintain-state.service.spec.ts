import { TestBed } from '@angular/core/testing';
import { StateData } from '../../interfaces/state-data.model';

import { MaintainStateService } from './maintain-state.service';

describe('MaintainStateService', () => {
  let service: MaintainStateService;
  let dummyData!: StateData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaintainStateService);
    dummyData = {
      navigationUrl: '/shows/1',
      showId: '1',
      markShowAsWatched: false
    }
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should set data for navgation', () => {
    service.setStateAction(dummyData);
    const data = service.getStateAction();
    expect(data.navigationUrl).toBe(dummyData.navigationUrl);
    expect(data.showId).toEqual(dummyData.showId);
  });

  it('Should get data for navgation', () => {
    const data = service.getStateAction();
    expect(data.navigationUrl).toBe('');
    expect(data.showId).toEqual('');
  });

  it('Should reset data for navgation', () => {
    const data = service.resetStateAction();
    expect(data.navigationUrl).toBe('');
    expect(data.showId).toEqual('');
  });
});
