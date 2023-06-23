import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCabComponent } from './register-cab.component';

describe('RegisterCabComponent', () => {
  let component: RegisterCabComponent;
  let fixture: ComponentFixture<RegisterCabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterCabComponent]
    });
    fixture = TestBed.createComponent(RegisterCabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
