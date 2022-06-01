import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAgencyForm } from './new-agency.form';

describe('NewAgencyForm', () => {
  let component: NewAgencyForm;
  let fixture: ComponentFixture<NewAgencyForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAgencyForm ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAgencyForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
