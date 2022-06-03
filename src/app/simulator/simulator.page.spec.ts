import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatorPage } from './simulator.page';

describe('SimulatorPage', () => {
  let component: SimulatorPage;
  let fixture: ComponentFixture<SimulatorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulatorPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
