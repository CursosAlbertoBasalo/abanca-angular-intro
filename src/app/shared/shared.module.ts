import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgenciesList } from './agencies/agencies.list';
import { ReloadingComponent } from './reloading/reloading.component';
import { TripsList } from './trips/trips.list';

@NgModule({
  declarations: [ReloadingComponent, AgenciesList, TripsList],
  imports: [CommonModule, RouterModule],
  exports: [ReloadingComponent, AgenciesList, TripsList],
})
export class SharedModule {}
