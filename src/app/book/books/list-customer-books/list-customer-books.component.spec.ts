import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustomerBooksComponent } from './list-customer-books.component';

describe('ListCustomerBooksComponent', () => {
  let component: ListCustomerBooksComponent;
  let fixture: ComponentFixture<ListCustomerBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCustomerBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCustomerBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
