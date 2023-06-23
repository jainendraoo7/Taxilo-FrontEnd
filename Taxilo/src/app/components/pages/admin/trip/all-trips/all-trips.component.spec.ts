import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTripsComponent } from './all-trips.component';

describe('AllTripsComponent', () => {
  let component: AllTripsComponent;
  let fixture: ComponentFixture<AllTripsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTripsComponent]
    });
    fixture = TestBed.createComponent(AllTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
