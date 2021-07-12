import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from '../../cart/cart-service.service';

import { book } from '../bookint';
import { ListCustomerBooksService } from '../list-customer-books.service';

@Component({
  selector: 'app-list-customer-books',
  templateUrl: './list-customer-books.component.html',
  styleUrls: ['./list-customer-books.component.css']
})
export class ListCustomerBooksComponent implements OnInit {
  bookData: any = {
    title: '',
    author: '',
    description: '',
    price: '',
    publishhDate: '',
    lastUpdatedOn: '',

    image: ''
  }

  allBook: book[] = [];
 

  myError = '';
  constructor(private customerBookService: ListCustomerBooksService, private router: Router,
    private cartService: CartServiceService) {
   
  }

  ngOnInit(): void {
    this.customerBookService.getAllBooks().subscribe((response) => {
      
      this.allBook = response;
     
    },
      (error) => {
        console.log(error.error.message);
        this.myError = error.error.message;
      });
   
  }
  view(title: any) {
    this.customerBookService.view(title).subscribe((response) => {
      this.bookData = response;
      console.log(title);
      this.router.navigate(['view-customer-book', title]);
    })

  }
  addToCart(bookData: book) {
    this.cartService.addToCart(bookData);
   
    window.alert('Your book has been added to the cart!');
  }
}
