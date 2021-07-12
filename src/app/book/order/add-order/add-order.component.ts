import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { book } from '../../books/bookint';
import { ViewCustomerBookService } from '../../books/view-customer-book.service';
import { CartServiceService } from '../../cart/cart-service.service';
import { Customer } from '../../customer/customer';
import { LoginService } from '../../login.service';
import { OrderService } from '../../order.service';
import { order } from '../order';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  allOrder: order = {
    orderId: 0,
    quantity: 0,
    orderTotal: 0,
    status: 'pending',
    paymentMethod: 'by cash',
    orderDate: new Date(),
    deleted: 0,
    customerPojo: {
      customerId: 0,
      mobileNumber: '',
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
    },
    bookpojo: []
  }


  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService,
    private loginService: LoginService,
    private viewCustomerService: ViewCustomerBookService,
    private cartService: CartServiceService,
    private addorder: OrderService) {

  }



  myError = '';

  items = this.cartService.getItems();
  ngOnInit(): void {
    let userName: any = this.activatedRoute.snapshot.paramMap.get('userName')
    console.log('from param ' + userName);
    this.orderService.getCustomerByUserName(this.loginService.newuser.username).subscribe((response) => {


      this.allOrder.customerPojo = response;

      this.allOrder.bookpojo = [...this.cartService.getItems()];




      this.allOrder.quantity = this.allOrder.bookpojo.length;
      for (let i = 0; i < this.allOrder.bookpojo.length; i++) {
        this.allOrder.orderTotal += +this.allOrder.bookpojo[i].price;
      }
      console.log('this.allOrder');
      console.log(this.cartService.getItems().length);
      console.log(this.allOrder);
      console.log(response);
      this.orderService.addOrder(this.allOrder).subscribe((response) => {
        console.log(response);
        this.allOrder.bookpojo = [];
        this.allOrder = response;
        this.cartService.emptyItems();
      },
        (error) => {
          console.log(error.error.message);
          this.myError = error.error.message;
        });

    },
      (error) => {
        console.log(error.error.message);
        this.myError = error.error.message;
      });







  }
  back() {
    this.router.navigate(['list-customer-book'])
  }


}


