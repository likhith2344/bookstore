import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Customer } from './customer/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl = "http://localhost:8097/api/v5/customers";

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  getHttpOptions(){
    let httpOptions = {};
    let userData: any = '';
    userData = this.authService.retrieveUserDetails();
    if(userData!=null){
      let token = JSON.parse(userData).token;
      console.log("token:" + token);
      httpOptions =  {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }
    }
   return httpOptions;
  }

  getAllCustomers():Observable<Customer[]>{
     return this.http.get<Customer[]>(this.baseUrl, this.getHttpOptions());
  }
}
