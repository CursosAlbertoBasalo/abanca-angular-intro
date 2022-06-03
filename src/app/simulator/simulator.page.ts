import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.page.html',
  styleUrls: ['./simulator.page.css'],
})
export class SimulatorPage implements OnInit {
  public rocket = {
    altitude: 1000,
    fuel: 500,
  };

  constructor() {}

  ngOnInit(): void {}

  public onUp() {
    this.rocket.altitude++;
  }
  public onDown() {
    this.rocket.altitude--;
  }
}
