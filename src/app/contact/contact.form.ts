import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact.form.html',
  styleUrls: ['./contact.form.css'],
})
export class ContactForm implements OnInit {
  public form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl(''),
    });
  }

  onSubmit(): void {
    const contact = this.form.value;
    console.warn('Send contact message', contact);
  }

  ngOnInit(): void {}
}
