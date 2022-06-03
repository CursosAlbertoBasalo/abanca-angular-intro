import { Component, OnInit } from '@angular/core';
import { SimulatorService } from '../core/simulator.service';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.page.html',
  styleUrls: ['./simulator.page.css'],
})
export class SimulatorPage implements OnInit {
  public rocket;

  constructor(private service: SimulatorService) {
    this.rocket = service.getNewRocket();
  }

  ngOnInit(): void {}

  public onUp() {
    this.rocket.altitude += this.service.delta;
  }
  public onDown() {
    this.rocket.altitude -= this.service.delta;
  }
}
