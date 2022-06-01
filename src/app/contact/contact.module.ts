import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactForm } from './contact.form';

@NgModule({
  declarations: [ContactComponent, ContactForm],
  imports: [CommonModule, ContactRoutingModule, SharedModule],
})
export class ContactModule {}
