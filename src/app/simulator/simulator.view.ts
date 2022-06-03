import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulator-view',
  templateUrl: './simulator.view.html',
  styleUrls: ['./simulator.view.css'],
})
export class SimulatorView implements OnInit {
  @Input() public altitude = 2000;

  constructor() {}

  ngOnInit(): void {}
}
