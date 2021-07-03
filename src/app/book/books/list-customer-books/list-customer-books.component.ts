import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { book } from '../bookint';
import { ListCustomerBooksService } from '../list-customer-books.service';

@Component({
  selector: 'app-list-customer-books',
  templateUrl: './list-customer-books.component.html',
  styleUrls: ['./list-customer-books.component.css']
})
export class ListCustomerBooksComponent implements OnInit {
  bookData={
    title : '',
    author : '',
    description : '',
    price : '',
    publishhDate : '',
    lastUpdatedOn : '',
    categories : '',
    review : '',
    image : ''
  }

  allBook: book[] = [];  
  //productService: ProductService;

  myError = '';
  constructor(private customerBookService:ListCustomerBooksService, private router: Router) {
    //this.productService = productService;
   }

  ngOnInit(): void {
    this.customerBookService.getAllBooks().subscribe((response) => {
      console.log(response);
      this.allBook = response;
      console.log(this.allBook);
    },
    (error) => {
      console.log(error.error.message);
      this.myError = error.error.message;
    });
    console.log("this is after the asynchronous call");
  }
view(){
this.router.navigate(['view-customer-book']);
}
}
