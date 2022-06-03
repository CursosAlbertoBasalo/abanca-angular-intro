import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatorForm } from './simulator.form';

describe('SimulatorForm', () => {
  let component: SimulatorForm;
  let fixture: ComponentFixture<SimulatorForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulatorForm ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulatorForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
