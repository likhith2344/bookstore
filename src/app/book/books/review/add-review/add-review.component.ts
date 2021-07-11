import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartServiceService } from 'src/app/book/cart/cart-service.service';
import { LoginService } from 'src/app/book/login.service';
import { OrderService } from 'src/app/book/order.service';
import { book } from '../../bookint';
import { ViewCustomerBookService } from '../../view-customer-book.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  reviewData={
    headLine : '',
    comment : '',
    rating : 0,
    reviewOn : new Date(),
    book : {
      bookId : 0,
      title : '',
      author : '',
      description : '',
      price : '',
      publishDate : '',
      lastUpdatedOn : '',
      image : '',
      categories:{
        categoryId : 0,
        categoryName :'',
        categoryImageUrl: ''
       }
      // review :book[]=[]
  
    },
    customer :{
      customerId :0,
      mobileNumber : 0,
      fullName : '',
      registerOn : '',
      userPojo:{
      
        username: '',
      password: '',
      role : ''
      },
    
    addressPojo:  {
      addressId: 0,
      address: '',
      city: '',
      country: '',
      pincode: ''
    }
    }
  }
  
  BookData= {
    bookId : 0,
    title : '',
    author : '',
    description : '',
    price : '',
    publishDate : '',
    lastUpdatedOn : '',
    image : '',
    categories : {
      categoryId : 0,
      categoryName :'',
      categoryImageUrl: ''

    }
  }

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
this.BookData=response;
})
}

submit(title:any){
let titles : any = this.activatedRoute.snapshot.paramMap.get('title')
console.log("before response"+title);
this.viewCustomerService.getBook(titles).subscribe((response)=>{
this.BookData=response;
// this.BookData.setValue(response);
console.log("after response"+title);

this.reviewData.book=response;

console.log(this.reviewData.book.author);

let userName : any =this.activatedRoute.snapshot.paramMap.get('userName')
console.log('from param '+userName);
this.orderService.getCustomerByUserName(this.loginService.newuser.username).subscribe((response) => {
this.reviewData.customer=response;
console.log(this.reviewData);

this.viewCustomerService.addReview(this.reviewData).subscribe((response)=>{
this.reviewData=response;
console.log(this.reviewData);
this.router.navigate(['view-customer-book',title]);

});


});
});
}
  // submit(){
  //   this.router.navigate(['view-customer-book'])
  // }

}
