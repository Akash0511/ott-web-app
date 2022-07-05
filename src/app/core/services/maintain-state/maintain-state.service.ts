import { Injectable } from '@angular/core';
import { StateData } from '../../interfaces/state-data.model';

@Injectable({
  providedIn: 'root'
})
export class MaintainStateService {

  private stateData: StateData = this.resetStateAction()
  constructor() { }

  resetStateAction(): StateData {
    return {
      navigationUrl: '',
      showId: '',
      markShowAsWatched: false
    };
  }

  setStateAction(data: StateData): void {
    this.stateData = data;
  }

  getStateAction(): StateData {
    return this.stateData;
  }
}
