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

  BookData= {
    bookId : 0,
    title : '',
    author : '',
    description : '',
    price : '',
    publishhDate : '',
    lastUpdatedOn : '',
    image : '',
    categories : {
      categoryName :''
    }
  //   review : {
  //     headLine : '',
  // comment : '',
  // rating : '',
  // reviewOn : ''
  //   }
}
reviewData={
  headLine : '',
  comment : '',
  rating : '',
  reviewOn : '',
  book : {
    bookId : 0,
    title : '',
    author : '',
    description : '',
    price : '',
    publishhDate : '',
    lastUpdatedOn : '',
    image : ''

  },
  customer :{
    customerId :'',
    mobileNumber : 0,
    fullName : '',
    registerOn : '',
    userPojo:{
      username: '',
    password: '',
    role : 'customer'
    }
  }
}
allOrder={
  orderId :0,
  quantity:0,
  orderTotal: 0,
  status: '',
  paymentMethod: '',
  orderDate: '',
  deleted:0,

}

bookData: book[] = [];
reviewsData: review[] =[]; 


  constructor(private viewCustomerService :ViewCustomerBookService,
              private activatedRoute : ActivatedRoute,
              private router :Router,
              private orderService: OrderService,
              private loginService: LoginService,
              private cartService : CartServiceService) { 
    // this.bookForm = new FormGroup({
    //   title : new FormControl(),
    //   bookId : new FormControl(),
    //   author : new FormControl(),
    //   description : new FormControl(),
    //    image: new FormControl(),
    //   // productImageUrl : new FormControl()
    // })
    //this.router.navigate(['view-customer-book']);
  }

  ngOnInit(): void {
    let title : any = this.activatedRoute.snapshot.paramMap.get('title')
    console.log("before response"+title);
    this.viewCustomerService.getBook(title).subscribe((response)=>{
   
      // this.BookData.setValue(response);
      console.log("after response"+title);
     this.BookData= response;
     this.reviewData.book=response;
     
     console.log(this.BookData);
     console.log(this.reviewData.book.author);
     });

  //  this.viewCustomerService.getBook(this.BookData.title).subscribe((response)=>{
  //   console.log(response);
    
  
  //  });
  //  let userName : any =this.activatedRoute.snapshot.paramMap.get('username')
  //   console.log('from param '+userName);
  //   this.viewCustomerService.reviewByUserName(this.loginService.newuser.username).subscribe((response) => {
  //     console.log("username"+response);
  //  //   this.reviewData.customer.userPojo=response;

    
    // });
  
  }
 
   back(){
    
    
    // this.allProducts.push(myProduct);
    
    this.router.navigate(['list-customer-book']);
    
  }
  
  buyNow(book: any){
    this.cartService.addToCart(book);
    this.router.navigate(['cart']);
  }
  addReview(review :any){
    this.router.navigate(['view-customer-book']);
  }
  seeAll(title:any){
     this.router.navigate(['review',title]);
  }
  addToCart(book:any){
    this.cartService.addToCart(book);
    // console.log("view"+ this.cartService.addToCart(book));
   
  }
}




