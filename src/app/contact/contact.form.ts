import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact.form.html',
  styleUrls: ['./contact.form.css'],
})
export class ContactForm implements OnInit {
  public form: FormGroup;

  constructor(formBuilder: FormBuilder) {
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
    const control = this.getControl(controlName);
    if (!control) return false;
    return control.invalid;
  }

  public mustShowMessage(controlName: string): boolean {
    const control = this.getControl(controlName);
    if (!control) return false;
    return control.touched && control.invalid;
  }

  public getErrorMessage(controlName: string): string {
    const control = this.getControl(controlName);
    if (!control) return '';
    if (!control.errors) return '';
    const errors = control.errors;
    let errorMessage = '';
    errorMessage += errors['required'] ? '🔥 Field is required ' : ' ';
    errorMessage += errors['email'] ? '🔥 Should be an email address ' : ' ';
    errorMessage += errors['minlength']
      ? `🔥 More than ${errors['minlength'].requiredLength} chars`
      : ' ';
    errorMessage += errors['maxLength']
      ? `🔥 Less than ${errors['maxLength'].requiredLength} chars`
      : ' ';
    return errorMessage;
  }

  public onSubmit(): void {
    const contact = this.form.value;
    console.warn('Send contact message', contact);
  }
  private getControl(controlName: string): AbstractControl | null {
    return this.form.get(controlName);
  }

  ngOnInit(): void {}
}
