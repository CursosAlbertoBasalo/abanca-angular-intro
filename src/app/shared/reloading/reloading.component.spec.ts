import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloadingComponent } from './reloading.component';

describe('ReloadingComponent', () => {
  let component: ReloadingComponent;
  let fixture: ComponentFixture<ReloadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReloadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReloadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
