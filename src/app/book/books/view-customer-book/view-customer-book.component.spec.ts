import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerBookComponent } from './view-customer-book.component';

describe('ViewCustomerBookComponent', () => {
  let component: ViewCustomerBookComponent;
  let fixture: ComponentFixture<ViewCustomerBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCustomerBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCustomerBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
