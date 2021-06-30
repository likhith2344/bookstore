import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './book/books/books.component';
import { CustomerComponent } from './book/customer/customer.component';
import { OrderComponent } from './book/order/order.component';
import { AdminComponent } from './book/user/admin/admin.component';
import { LoginComponent } from './book/user/login/login.component';
import { RegistryComponent } from './book/user/registry/registry.component';
import { HeaderComponent } from './header/header.component';
import { Header1Component } from './header1/header1.component';

const routes: Routes = [
  {
    path : 'books',
    component:BooksComponent
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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
