import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { book } from './bookint';

@Injectable({
  providedIn: 'root'
})
export class ListCustomerBooksService {

  
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

getAllBooks(): Observable<book[]>{
return this.http.get<book[]>('http://localhost:8097/api/v8/books', this.getHttpOptions());
}
}
