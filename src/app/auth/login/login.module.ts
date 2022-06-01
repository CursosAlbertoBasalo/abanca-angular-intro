import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginForm } from './login.form';

@NgModule({
  declarations: [LoginComponent, LoginForm],
  imports: [CommonModule, LoginRoutingModule, SharedModule],
})
export class LoginModule {}
