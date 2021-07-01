import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdminBooksComponent } from './list-admin-books.component';

describe('ListAdminBooksComponent', () => {
  let component: ListAdminBooksComponent;
  let fixture: ComponentFixture<ListAdminBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAdminBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAdminBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
