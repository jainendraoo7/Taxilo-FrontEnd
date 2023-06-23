import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryStatusComponent } from './query-status.component';

describe('QueryStatusComponent', () => {
  let component: QueryStatusComponent;
  let fixture: ComponentFixture<QueryStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QueryStatusComponent]
    });
    fixture = TestBed.createComponent(QueryStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
