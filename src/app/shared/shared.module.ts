import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReloadingComponent } from './reloading/reloading.component';



@NgModule({
  declarations: [
    ReloadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReloadingComponent
  ]
})
export class SharedModule { }
