import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Agency } from 'src/app/core/api/agency.interface';
import { DataService } from 'src/app/core/data.service';
import { FormMessagesService } from 'src/app/core/form-messages.service';
import { UtilService } from 'src/app/core/util.service';

@Component({
  selector: 'app-new-agency-form',
  templateUrl: './new-agency.form.html',
  styleUrls: ['./new-agency.form.css'],
})
export class NewAgencyForm implements OnInit {
  public form: FormGroup;
  public ranges = ['Orbital', 'Interplanetary'];
  public statuses = ['Active', 'Pending'];
  // public formMessages: FormMessagesService;

  constructor(
    private data: DataService,
    private util: UtilService,
    private formMessages: FormMessagesService,
    formBuilder: FormBuilder
  ) {
    //this.formMessages = formMessages;
    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      range: new FormControl(this.ranges[0]),
      status: new FormControl(this.statuses[0]),
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

  public onChange(field: string, event: Event) {
    const control = this.formMessages.getControl(this.form, field);
    if (!control) return;
    const selectElement = event.target as HTMLSelectElement;
    control.setValue(selectElement.value, { onlySelf: true });
  }

  public onSubmitClick() {
    const { name, range, status } = this.form.value;
    const id = this.util.getDashId(name);
    const newAgencyData: Agency = { id, name, range, status };
    console.warn('Send register data ', newAgencyData);
    this.data.postAgency(newAgencyData);
  }

  ngOnInit(): void {}
}
