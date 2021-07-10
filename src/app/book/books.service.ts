import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { book } from './books/bookint';
import { categories } from './books/category/category';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  catg : categories ={
    categoryId  : 0,
    categoryName : " ",
    categoryImageUrl :''
  }
  storeCtype: any;
  storeCId : number = 0;
  
  allBooks : book[] =[];
  
  constructor(private http : HttpClient,private categoryService : CategoryService) { }

  baseUrl = "http://localhost:9001/api/v8";

  getAllBooks(): Observable<book[]>{
    return this.http.get<book[]>("http://localhost:9001/api/v8/books");
  }

  // deleteBook(bookId: number) :Observable<Boolean>{
  //   return this.http.delete<Boolean>("http://localhost:9001/api/v8/books/" + bookId);
  // }

  deleteBook1(bookId: number) :Observable<book[]>{
    console.log("http:" + JSON.stringify( this.http.delete<book[]>("http://localhost:9001/api/v8/books1/" + bookId)));
    return this.http.delete<book[]>("http://localhost:9001/api/v8/books1/" + bookId);
  }

  addBook(newBook : book) :Observable<book>{
  //  newBook.categories = this.getcategory(this.catg.categoryId);
    console.log("inser:" + JSON.stringify(newBook.categories));
    return this.http.post<book> ("http://localhost:9001/api/v8/books",newBook);
  }

  updateBook (updateBook : book): Observable<book>{
 //   updateBook.categories = this.getcategory(this.catg.categoryId);
    console.log("inser:" + JSON.stringify(updateBook.categories));
   return this.http.put<book>("http://localhost:9001/api/v8/books" , updateBook);
  }

  getBook(bookId: number):Observable<book> {
    return this.http.get<book>("http://localhost:9001/api/v8/books/" + bookId);
  }

  // ctype(){
  //   let allCategories: any =this.categoryService.getAllCategories();
  //   console.log("cat in book:" + JSON.stringify(JSON.stringify(allCategories)));
  // }

  // getProduct (productId : number): Observable<Product>{
  // return this.http.get<Product>(this.baseUrl +"/getone/"+productId);
  // }

//******************************************************************* */

/*
  getAllBooks(): Book[] {
      console.log(this.allBooks);
      return this.allBooks;
    }
    deleteBook(bookId: number) {
      this.allBooks.splice(this.allBooks.findIndex((book) => book.bookId == bookId), 1);
  // }

  addBook(newBook: Book): Book[] {
    newBook.bookId = this.allBooks[this.allBooks.length - 1].bookId + 1;
    newBook.categories = this.getcategory(this.catg.categoryId);
    this.allBooks.push(newBook);
    return this.allBooks;

    updateBook(updateBook : Book): Book[] {
    // newBook.bookId = this.allBooks[this.allBooks.length - 1].bookId + 1;
    // newBook.categories = this.getcategory(this.catg.categoryId);
    let bookIndex = this.allBooks.findIndex((book) => book.bookId == updateBook.bookId);
    this.allBooks[bookIndex]=updateBook;
    return this.allBooks;
  }
  }
  getBook(bookId: number): any{
    let book =  this.allBooks.find((bk) => bk.bookId==bookId);
    return book;
  }*/
  //cs
  setcategoryId(storeCategoryId: number)
  {
    this.storeCId = storeCategoryId;
  }
  //bs
  // getcategoryId(){
  //    let length : number = this.categoryservice.allCategories.length;
  //   for (let index = 0; index < length ; index++) {
  //     if(this.)
     
  // }
  
  cattype() : string {
    return this.catg.categoryName;
  }

  // getcategory(ctype: number) : Category {
  //   switch (ctype) {
  //     case 1:
  //       this.catg.categoryId =1;
  //       this.catg.categoryName ="Novel";
  //       return this.catg;
  //     case 2:
  //       this.catg.categoryId =2;
  //       this.catg.categoryName = "Literature";
  //       return this.catg; 
  //     case 3:
  //       this.catg.categoryId  = 3;
  //       this.catg.categoryName = "GenreFiction"; 
  //       return this.catg;
  //     case 4:
  //       this.catg.categoryId = 4;
  //       this.catg.categoryName = "ActionAdventure"; 
  //       return this.catg;
  //     case 5:
  //       this.catg.categoryId  = 5;
  //       this.catg.categoryName = "Comic"; 
  //       return this.catg;
  //     case 6:
  //       this.catg.categoryId  = 6;
  //       this.catg.categoryName = "Detective"; 
  //       return this.catg;
  //     default :
  //        return this.catg;
  //   }
    
  // }


  //************************************************************************* */

  //  getAllBooks() :Observable<Book[]>{
  //   let userData: any ='';
  //   userData=this.authService.retrieveUserDetails();
  //   let token=JSON.parse(userData).token;
  //   console.log("token:" + token);
  //   let httpOptions={
  //     headers : new HttpHeaders({
  //       'content-type':'application/json',
  //       'Authorization': 'Bearer ' + token
  //     })
  //   }
  //   return this.http.get<Book[]>(this.baseUrl,httpOptions);
  // }

  // deleteBook(bookId: number) :Observable<Boolean>{
  //   return this.http.delete<Boolean>(this.baseUrl +"/books/"+bookId);
  // }

  // addBook(newBook : Book) :Observable<Book>{
  //   return this.http.post<Book> (this.baseUrl + "/books",newBook);
  // }

  // updateBook (updateBook : Book): Observable<Book>{
  //  return this.http.put<Book>(this.baseUrl +"/books" , updateBook);
  // }

  // // getProduct (productId : number): Observable<Product>{
  // // return this.http.get<Product>(this.baseUrl +"/getone/"+productId);
  // // }

}
