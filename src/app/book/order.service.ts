import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { order } from './order/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private authService : AuthService,
              private http :HttpClient) { }

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
  getAllOrders(customerId : any):Observable<order[]>{
    return this.http.get<order[]>('http://localhost:8097/order/get',this.getHttpOptions());
  }
  deleteOrder(){

  }
}
