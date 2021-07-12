import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CartServiceService } from '../../cart/cart-service.service';

import { LoginService } from '../../login.service';
import { OrderService } from '../../order.service';


import { book } from '../bookint';
import { CategoryComponent } from '../category/category.component';
import { review } from '../review/review';
import { ViewCustomerBookService } from '../view-customer-book.service';

@Component({
  selector: 'app-view-customer-book',
  templateUrl: './view-customer-book.component.html',
  styleUrls: ['./view-customer-book.component.css']
})
export class ViewCustomerBookComponent implements OnInit {
  // bookForm:FormGroup;

  BookData = {
    bookId: 0,
    title: '',
    author: '',
    description: '',
    price: '',
    publishDate: '',
    lastUpdatedOn: '',
    image: '',
    categories: {
      categoryId: 0,
      categoryName: '',
      categoryImageUrl: ''

    }
    //   review : {
    //     headLine : '',
    // comment : '',
    // rating : '',
    // reviewOn : ''
    //   }
  }
  reviewData = {
    headLine: '',
    comment: '',
    rating: 0,
    reviewOn: new Date(),
    book: {
      bookId: 0,
      title: '',
      author: '',
      description: '',
      price: '',
      publishDate: '',
      lastUpdatedOn: '',
      image: '',
      categories: {
        categoryId: 0,
        categoryName: '',
        categoryImageUrl: ''
      }
      // review :book[]=[]

    },
    customer: {
      customerId: 0,
      mobileNumber: 0,
      fullName: '',
      registerOn: '',
      userPojo: {

        username: '',
        password: '',
        role: ''
      },

      addressPojo: {
        addressId: 0,
        address: '',
        city: '',
        country: '',
        pincode: ''
      }
    }
  }
  allOrder = {
    orderId: 0,
    quantity: 0,
    orderTotal: 0,
    status: '',
    paymentMethod: '',
    orderDate: '',
    deleted: 0,

  }


  bookData: book[] = [];
  reviewsData: review[] = [];


  constructor(private viewCustomerService: ViewCustomerBookService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
    private loginService: LoginService,
    private cartService: CartServiceService) {

  }

  ngOnInit(): void {
    let title: any = this.activatedRoute.snapshot.paramMap.get('title')
   
    this.viewCustomerService.getBook(title).subscribe((response) => {


     
      this.BookData = response;
      let titles: any = this.activatedRoute.snapshot.paramMap.get('title')
     
      this.viewCustomerService.seeAll(titles).subscribe((response) => {
       
        this.reviewsData = response;



      });
    });



  }


  back() {




    this.router.navigate(['list-customer-book']);

  }

  buyNow(book: any) {
    this.cartService.addToCart(book);
    this.router.navigate(['cart']);
  }
  addReviews(title: any) {
    this.router.navigate(['add-review', title]);
  }
  seeAll(title: any) {
    let titles: any = this.activatedRoute.snapshot.paramMap.get('title')
    console.log(title);
    this.viewCustomerService.seeAll(titles).subscribe((response) => {
      console.log(response);
      this.reviewsData = response;
      console.log(this.reviewsData);
    })

    this.router.navigate(['view-customer-book', title]);
  }
  addToCart(book: any) {
    this.cartService.addToCart(book);
    this.router.navigate(['cart']);


  }
}




