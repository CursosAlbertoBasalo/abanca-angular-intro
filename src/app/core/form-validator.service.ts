import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormValidatorService {
  constructor() {}

  public passwordMatch(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if (!password || !confirmPassword) {
      return {
        passwordMatch: '🔥 No password provided',
      };
    }
    if (password.value !== confirmPassword.value) {
      return {
        passwordMatch: "🔥 Passwords don't match",
      };
    }
    return null;
  }
}
