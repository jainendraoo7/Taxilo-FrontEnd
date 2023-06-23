import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabDetailComponent } from './cab-detail.component';

describe('CabDetailComponent', () => {
  let component: CabDetailComponent;
  let fixture: ComponentFixture<CabDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CabDetailComponent]
    });
    fixture = TestBed.createComponent(CabDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
