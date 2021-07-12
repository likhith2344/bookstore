import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../order.service';
import { order } from '../order';

@Component({
  selector: 'app-view-customer-order',
  templateUrl: './view-customer-order.component.html',
  styleUrls: ['./view-customer-order.component.css']
})
export class ViewCustomerOrderComponent implements OnInit {
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
    private orderService: OrderService) {
    this.router.navigate(['view-customer-order']);
  }

  ngOnInit(): void {
    let orderId: any = this.activatedRoute.snapshot.paramMap.get('orderId')
    console.log(orderId);
    this.orderService.viewOrder(orderId).subscribe((response) => {


      this.allOrder = response;
      console.log(this.allOrder);
    })


  }

  back() {
    this.router.navigate(['list-customer-order']);
  }

}
