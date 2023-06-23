import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverLogInComponent } from './driver-log-in.component';

describe('DriverLogInComponent', () => {
  let component: DriverLogInComponent;
  let fixture: ComponentFixture<DriverLogInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriverLogInComponent]
    });
    fixture = TestBed.createComponent(DriverLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
