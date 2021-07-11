import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../login.service';

import { OrderService } from '../../order.service';
import { LoginComponent } from '../../user/login/login.component';
import { order } from '../order';


@Component({
  selector: 'app-list-customer-order',
  templateUrl: './list-customer-order.component.html',
  styleUrls: ['./list-customer-order.component.css']
})
export class ListCustomerOrderComponent implements OnInit {

  allOrder={
    orderId :0,
    quantity:0,
    orderTotal: 0,
    status: '',
    paymentMethod: '',
    orderDate: '',
    deleted:0,
    customerPojo : {
      customerId :'',
      mobileNumber : 0,
      fullName : '',
      registerOn : '',
      addressPojo :{
        addressId : 0,
        address: '',
        city :'',
        country : '',
        pincode : 0
      }
      
    }
  

    
}
  constructor(private router: Router,
              private orderService: OrderService,
              private activatedRoute: ActivatedRoute,
             private loginService :LoginService) {
              // this.router.navigate(['list-customer-order']);
              }

allOrders: order [] =[];
myError ='';
  
  ngOnInit(): void {
    let userName : any =this.activatedRoute.snapshot.paramMap.get('userName')
    console.log('from param '+userName);
    this.orderService.getAllOrders(this.loginService.newuser.username).subscribe((response) => {
      console.log(response);
     // console.log(customerId);
      this.allOrders = response;
      console.log(this.allOrders);
     //  this.router.navigate(['list-customer-order',customerId]);
    },
    (error) => {
      console.log(error.error.message);
      this.myError = error.error.message;
    });
    console.log("this is after the asynchronous call");
    
  }
  
viewOrder(orderId : any){
this.router.navigate(['view-customer-order',orderId])
}
}
// view(title:any){
//   this.customerBookService.view(title).subscribe((response)=>{
//     this.bookData = response;
//     console.log(title);
    
//   })

// }