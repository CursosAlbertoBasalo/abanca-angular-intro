import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormMessagesService {
  constructor() {}

  public hasError(form: FormGroup, controlName: string): boolean {
    const control = this.getControl(form, controlName);
    if (!control) return false;
    return control.invalid;
  }

  public mustShowMessage(form: FormGroup, controlName: string): boolean {
    const control = this.getControl(form, controlName);
    if (!control) return false;
    return control.touched && control.invalid;
  }

  public getErrorMessage(form: FormGroup, controlName: string): string {
    const control = this.getControl(form, controlName);
    if (!control) return '';
    if (!control.errors) return '';
    const errors = control.errors;
    let errorMessage = '';
    errorMessage += errors['required'] ? '🔥 Field is required ' : ' ';
    errorMessage += errors['email'] ? '🔥 Should be an email address ' : ' ';
    errorMessage += errors['minlength']
      ? `🔥 More than ${errors['minlength'].requiredLength} chars`
      : ' ';
    errorMessage += errors['maxlength']
      ? `🔥 Less than ${errors['maxlength'].requiredLength} chars`
      : ' ';
    return errorMessage;
  }

  public getControl(
    form: FormGroup,
    controlName: string
  ): AbstractControl | null {
    return form.get(controlName);
  }
}
