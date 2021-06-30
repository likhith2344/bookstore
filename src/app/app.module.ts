import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';







import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './book/user/login/login.component';
import { RegistryComponent } from './book/user/registry/registry.component';
import { AddressComponent } from './book/customer/address/address.component';

import { OrderComponent } from './book/order/order.component';
import { CustomerComponent } from './book/customer/customer.component';
import { BooksComponent } from './book/books/books.component';
import { CategoryComponent } from './book/books/category/category.component';
import { LogoutComponent } from './book/user/logout/logout.component';
import { AdminComponent } from './book/user/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { Header1Component } from './header1/header1.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistryComponent,
    CustomerComponent,
    OrderComponent,
    BooksComponent,
    CategoryComponent,
    AddressComponent,
    HeaderComponent,
    LogoutComponent,
    AdminComponent,
    Header1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
