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
import { ViewCustomerBookComponent } from './book/books/view-customer-book/view-customer-book.component';
import { ReviewComponent } from './book/books/review/review.component';
import { ViewCustomerOrderComponent } from './book/order/view-customer-order/view-customer-order.component';
import { AddOrderComponent } from './book/order/add-order/add-order.component';
import { AddReviewComponent } from './book/books/review/add-review/add-review.component';
import { CartComponent } from './book/cart/cart.component';
import { EditCustomerComponent } from './book/customer/edit-customer/edit-customer.component';
import { ListAllBooksComponent } from './book/books/list-all-books/list-all-books.component';
import { ManageBooksComponent } from './book/books/list-admin-books/manage-books/manage-books.component';
import { AddCategoryComponent } from './book/books/category/add-category/add-category.component';
import { ListCategoryComponent } from './book/books/category/list-category/list-category.component';



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
    ListAdminOrderComponent,
    ViewCustomerBookComponent,
    ReviewComponent,
    ViewCustomerOrderComponent,
    AddOrderComponent,
    AddReviewComponent,
    CartComponent,
    EditCustomerComponent,
    ListAllBooksComponent,
    ManageBooksComponent,
    AddCategoryComponent,
    ListCategoryComponent


    
  
    
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
