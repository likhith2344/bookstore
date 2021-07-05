import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { OrderService } from '../../order.service';
import { order } from '../order';


@Component({
  selector: 'app-list-customer-order',
  templateUrl: './list-customer-order.component.html',
  styleUrls: ['./list-customer-order.component.css']
})
export class ListCustomerOrderComponent implements OnInit {

  allOrder={
    quantity:0,
    orderTotal: 0,
    status: '',
    paymentMethod: '',
    orderDate: '',
    deleted:0,
    customer : {
      customerId :0,
      mobileNumber : 0,
      fullName : '',
      registerOn : ''
    }
  

    
}
  constructor(private router : Router,
              private orderService: OrderService,
              private activatedRoute :ActivatedRoute ) { }

allOrders: order [] =[];
myError ='';
  
  ngOnInit(): void {
    let customerId : any =this.activatedRoute.snapshot.paramMap.get('customerId')
    this.orderService.getAllOrders(customerId).subscribe((response) => {
      console.log(response);
      this.allOrders = response;
      console.log(this.allOrders);
      //this.router.navigate(['list-customer-order',customerId]);
    },
    (error) => {
      console.log(error.error.message);
      this.myError = error.error.message;
    });
    console.log("this is after the asynchronous call");
    
  }
  
deleteOrder(){

}
}
// view(title:any){
//   this.customerBookService.view(title).subscribe((response)=>{
//     this.bookData = response;
//     console.log(title);
    
//   })

// }