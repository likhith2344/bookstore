import { TestBed } from '@angular/core/testing';

import { ListCustomerBooksService } from './list-customer-books.service';

describe('ListCustomerBooksService', () => {
  let service: ListCustomerBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCustomerBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
