import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './book/books/add-books/add-books.component';
import { AddCategoryComponent } from './book/books/category/add-category/add-category.component';
import { ListCategoryComponent } from './book/books/category/list-category/list-category.component';
import { EditBooksComponent } from './book/books/edit-books/edit-books.component';
import { ListAdminBooksComponent } from './book/books/list-admin-books/list-admin-books.component';
import { ManageBooksComponent } from './book/books/list-admin-books/manage-books/manage-books.component';
import { ListAllBooksComponent } from './book/books/list-all-books/list-all-books.component';
import { ListCustomerBooksComponent } from './book/books/list-customer-books/list-customer-books.component';
import { ReviewComponent } from './book/books/review/review.component';
import { ViewCustomerBookComponent } from './book/books/view-customer-book/view-customer-book.component';
import { CartComponent } from './book/cart/cart.component';

import { CustomerComponent } from './book/customer/customer.component';
import { EditCustomerComponent } from './book/customer/edit-customer/edit-customer.component';

import { AddOrderComponent } from './book/order/add-order/add-order.component';
import { ListAdminOrderComponent } from './book/order/list-admin-order/list-admin-order.component';
import { ListCustomerOrderComponent } from './book/order/list-customer-order/list-customer-order.component';
import { OrderComponent } from './book/order/order.component';
import { ViewCustomerOrderComponent } from './book/order/view-customer-order/view-customer-order.component';
import { AdminComponent } from './book/user/admin/admin.component';
import { LoginComponent } from './book/user/login/login.component';
import { LogoutComponent } from './book/user/logout/logout.component';
import { RegistryComponent } from './book/user/registry/registry.component';
import { HeaderComponent } from './header/header.component';
import { Header1Component } from './header1/header1.component';

const routes: Routes = [
  {
    path: 'list-customer-book',
    component : ListCustomerBooksComponent
  },
  {
    path: 'add-order',
    component : AddOrderComponent
  },
  {
    path: 'cart',
    component : CartComponent
  },
  {
    path: 'view-customer-book/:title',
    component :ViewCustomerBookComponent
  },
  {
    path: 'list-customer-order',
    component : ListCustomerOrderComponent
  },
  
  {
    path: 'view-customer-order/:orderId',
    component :ViewCustomerOrderComponent
  },
  {
    path: 'list-admin-order',
    component : ListAdminOrderComponent
  },
  {
    path: 'list-admin-books',
    component : ListAdminBooksComponent
  },
  {
    path: 'order',
    component : OrderComponent
  },
  {
    path : 'login',
    component: LoginComponent
  },
  {
    path :'registry',
    component: RegistryComponent
  },
  {
    path :'admin',
    component : AdminComponent
  },
  {
    path :'customer',
    component : CustomerComponent
  },
  {path : 'header',
  component : HeaderComponent

  },
  {
    path:'header1',
    component : Header1Component
  },
  {
    path: 'register', 
    component: RegistryComponent
  },
  {
    path: 'authenticate', 
    component: LoginComponent
  },
  {
    path: 'logout', 
    component: LogoutComponent
  },
  {
    path: 'review/:title', 
    component: ReviewComponent
  },
  {
    path: 'edit-customer', 
    component: EditCustomerComponent
  },
  {
    path: 'list-category',
    component: ListCategoryComponent
  }, 
  {
    path: 'edit-book/:bookId',
    component: EditBooksComponent
  },
  {
    path: 'manage-book',
    component: ManageBooksComponent
  },
  {
    path: 'add-book',
    component: AddBooksComponent
  },
  {
    path: 'add-category',
    component: AddCategoryComponent
  },
  {
    path:'list-all-books',
    component: ListAllBooksComponent
  }




  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
