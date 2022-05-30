import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AgenciesRoutingModule } from './agencies-routing.module';
import { AgenciesComponent } from './agencies.component';

@NgModule({
  declarations: [AgenciesComponent],
  imports: [CommonModule, AgenciesRoutingModule, SharedModule],
})
export class AgenciesModule {}
