import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatorView } from './simulator.view';

describe('SimulatorView', () => {
  let component: SimulatorView;
  let fixture: ComponentFixture<SimulatorView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulatorView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulatorView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
