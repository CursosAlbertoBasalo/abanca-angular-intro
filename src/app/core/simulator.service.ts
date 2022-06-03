import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SimulatorService {
  public delta = 5;

  constructor() {}

  public getNewRocket() {
    return {
      altitude: 0,
      fuel: 500,
    };
  }
}
