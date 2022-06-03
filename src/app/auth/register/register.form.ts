import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormValidatorService } from 'src/app/core/form-validator.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register.form.html',
  styleUrls: ['./register.form.css'],
})
export class RegisterForm implements OnInit {
  public form: FormGroup;

  constructor(private fvs: FormValidatorService, formBuilder: FormBuilder) {
    // const fvs = new FormValidatorService();

    this.form = formBuilder.group(
      {
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
        ]),
        acceptTerms: new FormControl(false, [Validators.requiredTrue]),
      },
      {
        validators: [fvs.passwordMatch],
      }
    );
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

  public getPasswordMatchError() {
    if (!this.form.errors) return '';
    return this.form.errors['passwordMatch'];
  }

  public onSubmitClick() {
    const { name, email, password } = this.form.value;
    const registerData = { name, email, password };
    console.warn('Send register data ', registerData);
  }

  private getControl(controlName: string): AbstractControl | null {
    return this.form.get(controlName);
  }
}
