import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewAgencyRoutingModule } from './new-agency-routing.module';
import { NewAgencyForm } from './new-agency.form';
import { NewAgencyPage } from './new-agency.page';

@NgModule({
  declarations: [NewAgencyPage, NewAgencyForm],
  imports: [CommonModule, NewAgencyRoutingModule, SharedModule],
})
export class NewAgencyModule {}
