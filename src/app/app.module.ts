import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';







import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './book/user/login/login.component';
import { RegistryComponent } from './book/user/registry/registry.component';
import { AddressComponent } from './book/customer/address/address.component';

import { OrderComponent } from './book/order/order.component';
import { CustomerComponent } from './book/customer/customer.component';

import { CategoryComponent } from './book/books/category/category.component';
import { LogoutComponent } from './book/user/logout/logout.component';
import { AdminComponent } from './book/user/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Header1Component } from './header1/header1.component';
import { ListCustomerComponent } from './book/customer/list-customer/list-customer.component';
import { ListAdminBooksComponent } from './book/books/list-admin-books/list-admin-books.component';
import { ListCustomerBooksComponent } from './book/books/list-customer-books/list-customer-books.component';
import { EditBooksComponent } from './book/books/edit-books/edit-books.component';
import { AddBooksComponent } from './book/books/add-books/add-books.component';
import { ListCustomerOrderComponent } from './book/order/list-customer-order/list-customer-order.component';
import { ListAdminOrderComponent } from './book/order/list-admin-order/list-admin-order.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistryComponent,
    CustomerComponent,
    OrderComponent,
   
    CategoryComponent,
    AddressComponent,
    HeaderComponent,
    LogoutComponent,
    AdminComponent,
    Header1Component,
    ListCustomerComponent,
    ListAdminBooksComponent,
    ListCustomerBooksComponent,
    EditBooksComponent,
    AddBooksComponent,
    ListCustomerOrderComponent,
    ListAdminOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
