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
    title: '',
    author: '',
    description: '',
    price: '',
    publishhDate: '',
    lastUpdatedOn: '',

    image: ''
  }
  items: book[] = [];
  constructor(private cartService: CartServiceService,
    private activatedRoute: ActivatedRoute,
    private viewCustomerService: ViewCustomerBookService,
    private router: Router) { }


  ngOnInit(): void {
    this.items = [...this.cartService.getItems()];

  }

  clearCart(bookId: number) {
    this.items = this.cartService.clearCart(bookId);

  }

  placeOrder() {
    this.router.navigate(['add-order'])
  }
  back() {
    this.router.navigate(['list-customer-book'])
  }
}


