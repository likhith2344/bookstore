import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { review } from './books/review/review';
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
  getAllOrders(userName : any):Observable<order[]>{
    console.log('from login componrnt'+userName);
    return this.http.get<order[]>('http://localhost:8097/order/'+userName,this.getHttpOptions());
  }
  viewOrder(orderId :any): Observable<order>{
    return this.http.get<order>('http://localhost:8097/order/orderId/'+orderId,this.getHttpOptions());
  }
  
}
