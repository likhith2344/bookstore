import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Customer } from './customer/customer';
import { Address } from './user/address';
import { User } from './user/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = 'http://localhost:8097';
  constructor(private http: HttpClient) { }
newuser :User={
  username : '',
  password :'',
  role : ''
}
  
  register(customerData: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.baseUrl + '/api/v5/customers', customerData);
  }

  login(userData: User): Observable<User>{
    this.newuser=userData;
    return this.http.post<User>(this.baseUrl + '/authenticate', userData);
  }
  address(addressData: Address): Observable<Address>{
    return this.http.post<Address>(this.baseUrl +'/api/v2/address/add',addressData);
  }
  
}
