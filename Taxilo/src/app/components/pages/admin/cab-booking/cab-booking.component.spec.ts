import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabBookingComponent } from './cab-booking.component';

describe('CabBookingComponent', () => {
  let component: CabBookingComponent;
  let fixture: ComponentFixture<CabBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CabBookingComponent]
    });
    fixture = TestBed.createComponent(CabBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
