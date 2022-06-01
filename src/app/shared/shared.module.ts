import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgenciesList } from './agencies/agencies.list';
import { ReloadingComponent } from './reloading/reloading.component';
import { TripsList } from './trips/trips.list';

@NgModule({
  declarations: [ReloadingComponent, AgenciesList, TripsList],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    ReloadingComponent,
    AgenciesList,
    TripsList,
  ],
})
export class SharedModule {}
