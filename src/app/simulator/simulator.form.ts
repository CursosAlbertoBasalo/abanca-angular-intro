import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-simulator-form',
  templateUrl: './simulator.form.html',
  styleUrls: ['./simulator.form.css'],
})
export class SimulatorForm implements OnInit {
  @Output() private up = new EventEmitter<number>();
  @Output() private down = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  public onClickUp() {
    this.up.emit(1);
  }
  public onClickDown() {
    this.down.emit(1);
  }
}
