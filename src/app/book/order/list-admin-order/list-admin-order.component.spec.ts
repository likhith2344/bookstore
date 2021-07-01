import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdminOrderComponent } from './list-admin-order.component';

describe('ListAdminOrderComponent', () => {
  let component: ListAdminOrderComponent;
  let fixture: ComponentFixture<ListAdminOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAdminOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAdminOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
