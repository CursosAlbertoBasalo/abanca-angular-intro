import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SimulatorRoutingModule } from './simulator-routing.module';
import { SimulatorPage } from './simulator.page';
import { SimulatorForm } from './simulator.form';
import { SimulatorView } from './simulator.view';

@NgModule({
  declarations: [SimulatorPage, SimulatorForm, SimulatorView],
  imports: [CommonModule, SimulatorRoutingModule],
})
export class SimulatorModule {}
