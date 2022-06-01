import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.form.html',
  styleUrls: ['./login.form.css'],
})
export class LoginForm implements OnInit {
  public form: FormGroup;
  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  ngOnInit(): void {}

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
    return errorMessage;
  }

  public onSubmitClick() {
    console.warn('Send register data ', this.form.value);
  }

  private getControl(controlName: string): AbstractControl | null {
    return this.form.get(controlName);
  }
}
