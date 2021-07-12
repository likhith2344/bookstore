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
  }

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
    })
  }

  submit(title: any) {
    let titles: any = this.activatedRoute.snapshot.paramMap.get('title')
   
    this.viewCustomerService.getBook(titles).subscribe((response) => {
      this.BookData = response;
     
      this.reviewData.book = response;

      console.log(this.reviewData.book.author);

      let userName: any = this.activatedRoute.snapshot.paramMap.get('userName')
     
      this.orderService.getCustomerByUserName(this.loginService.newuser.username).subscribe((response) => {
        this.reviewData.customer = response;
    
        this.viewCustomerService.addReview(this.reviewData).subscribe((response) => {
          this.reviewData = response;
       
          this.router.navigate(['view-customer-book', title]);

        });


      });
    });
  }
  

}
