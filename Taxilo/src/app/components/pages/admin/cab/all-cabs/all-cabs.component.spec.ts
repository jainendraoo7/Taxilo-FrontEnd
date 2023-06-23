import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCabsComponent } from './all-cabs.component';

describe('AllCabsComponent', () => {
  let component: AllCabsComponent;
  let fixture: ComponentFixture<AllCabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCabsComponent]
    });
    fixture = TestBed.createComponent(AllCabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
