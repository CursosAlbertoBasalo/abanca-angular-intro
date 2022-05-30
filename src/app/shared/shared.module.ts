import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReloadingComponent } from './reloading/reloading.component';
import { AgenciesList } from './agencies/agencies.list';



@NgModule({
  declarations: [
    ReloadingComponent,
    AgenciesList
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReloadingComponent,
    AgenciesList
  ]
})
export class SharedModule { }
