import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { order } from '../order/order';
import { book } from './bookint';
import { review } from './review/review';

@Injectable({
  providedIn: 'root'
})
export class ViewCustomerBookService {

  constructor(private authService: AuthService,
              private httpClient: HttpClient) { }

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
    
    getBook(title:any): Observable<book>{
    return this.httpClient.get<book>('http://localhost:8097/api/v8/books/'+title, this.getHttpOptions());
    }
    getAllBooks(): Observable<book[]>{
      return this.httpClient.get<book[]>('http://localhost:8097/api/v8/books', this.getHttpOptions());
      }
      addReview(reviewData :review): Observable<review>{
        return this.httpClient.post<review> ('http://localhost:8097/api/v6/review/add',reviewData);
    
      }
      reviewByUserName(userName:any):Observable<review>{
        return this.httpClient.get<review>('http://localhost:8097/api/v6/reviews/'+userName, this.getHttpOptions());
      }
      seeAll(title: any):Observable<review[]>{
        return this.httpClient.get<review[]>('http://localhost:8097/api/v6/review/'+title,this.getHttpOptions());
      }
      getFindBookById(bookId: number):Observable<book>{
        return this.httpClient.get<book>('http://localhost:8097/api/v8/book/'+bookId,this.getHttpOptions());
      }
      
     
      }

    

