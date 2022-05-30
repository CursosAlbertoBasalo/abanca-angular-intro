import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const rutas: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
