import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUploadDocComponent } from './show-upload-doc.component';

describe('ShowUploadDocComponent', () => {
  let component: ShowUploadDocComponent;
  let fixture: ComponentFixture<ShowUploadDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUploadDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUploadDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
