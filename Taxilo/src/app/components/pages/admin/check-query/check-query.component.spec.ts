import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckQueryComponent } from './check-query.component';

describe('CheckQueryComponent', () => {
  let component: CheckQueryComponent;
  let fixture: ComponentFixture<CheckQueryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckQueryComponent]
    });
    fixture = TestBed.createComponent(CheckQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
