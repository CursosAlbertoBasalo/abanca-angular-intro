import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAgencyPage } from './new-agency.page';

describe('NewAgencyPage', () => {
  let component: NewAgencyPage;
  let fixture: ComponentFixture<NewAgencyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAgencyPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAgencyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
