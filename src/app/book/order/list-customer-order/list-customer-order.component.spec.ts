import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustomerOrderComponent } from './list-customer-order.component';

describe('ListCustomerOrderComponent', () => {
  let component: ListCustomerOrderComponent;
  let fixture: ComponentFixture<ListCustomerOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCustomerOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCustomerOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
