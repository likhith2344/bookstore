import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { book } from '../books/bookint';
import { ViewCustomerBookService } from '../books/view-customer-book.service';
import { LoginService } from '../login.service';
import { OrderService } from '../order.service';
import { CartServiceService } from './cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  bookData = {
    title : '',
    author : '',
    description : '',
    price : '',
    publishhDate : '',
    lastUpdatedOn : '',
  
    image : ''
  }
 items: book[]=[];
  constructor(private cartService: CartServiceService,
              private activatedRoute: ActivatedRoute,
              private viewCustomerService: ViewCustomerBookService,
              private router :Router) { }


  ngOnInit(): void {
    this.items= [...this.cartService.getItems()];
    // let title : any = this.activatedRoute.snapshot.paramMap.get('title')
    // console.log("before response"+title);
    // this.viewCustomerService.getBook(title).subscribe((response)=>{
   
    //   // this.BookData.setValue(response);
    //   console.log("after response"+title);
    //  this.bookData= response;
    // // this.reviewData.book=response;
     
    // //  console.log(this.BookData);
    // //  console.log(this.reviewData.book.author);
    // });
  }
    
  clearCart(bookId:number) {
    console.log(bookId);
    
   const a=  this.items.findIndex(b => b.bookId==bookId);
if(a!=-1){
  this.items.splice(a,1)
  return this.cartService.getItems();
}
else{
return this.cartService.getItems();
    }
  }
  
  placeOrder(){
this.router.navigate(['add-order'])
  }
  }


