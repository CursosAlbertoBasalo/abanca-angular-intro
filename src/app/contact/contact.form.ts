import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormMessagesService } from '../core/form-messages.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact.form.html',
  styleUrls: ['./contact.form.css'],
})
export class ContactForm implements OnInit {
  public form: FormGroup;

  constructor(
    private formMessages: FormMessagesService,
    formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(5),
      ]),
      message: new FormControl('Call me back', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
    });
  }

  public hasError(controlName: string): boolean {
    return this.formMessages.hasError(this.form, controlName);
  }

  public mustShowMessage(controlName: string): boolean {
    return this.formMessages.mustShowMessage(this.form, controlName);
  }

  public getErrorMessage(controlName: string): string {
    return this.formMessages.getErrorMessage(this.form, controlName);
  }

  public onSubmit(): void {
    const contact = this.form.value;
    console.warn('Send contact message', contact);
  }

  ngOnInit(): void {}
}
