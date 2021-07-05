import { TestBed } from '@angular/core/testing';

import { ViewCustomerBookService } from './view-customer-book.service';

describe('ViewCustomerBookService', () => {
  let service: ViewCustomerBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewCustomerBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
