import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAdminBooksComponent } from './book/books/list-admin-books/list-admin-books.component';
import { ListCustomerBooksComponent } from './book/books/list-customer-books/list-customer-books.component';

import { CustomerComponent } from './book/customer/customer.component';
import { ListAdminOrderComponent } from './book/order/list-admin-order/list-admin-order.component';
import { ListCustomerOrderComponent } from './book/order/list-customer-order/list-customer-order.component';
import { OrderComponent } from './book/order/order.component';
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
    path: 'list-customer-order',
    component : ListCustomerOrderComponent
  },
  {
    path: 'list-admin-order',
    component : ListAdminOrderComponent
  },
  {
    path: 'list-admin-book',
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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
