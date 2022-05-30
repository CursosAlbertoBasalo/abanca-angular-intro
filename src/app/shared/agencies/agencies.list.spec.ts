import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciesList } from './agencies.list';

describe('AgenciesList', () => {
  let component: AgenciesList;
  let fixture: ComponentFixture<AgenciesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenciesList ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
