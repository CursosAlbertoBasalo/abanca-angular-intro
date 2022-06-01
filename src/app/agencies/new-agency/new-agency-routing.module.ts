import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewAgencyPage } from './new-agency.page';

const routes: Routes = [{ path: '', component: NewAgencyPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewAgencyRoutingModule {}
