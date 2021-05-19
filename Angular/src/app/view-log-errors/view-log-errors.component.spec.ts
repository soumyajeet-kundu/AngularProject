import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLogErrorsComponent } from './view-log-errors.component';

describe('ViewLogErrorsComponent', () => {
  let component: ViewLogErrorsComponent;
  let fixture: ComponentFixture<ViewLogErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLogErrorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLogErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
