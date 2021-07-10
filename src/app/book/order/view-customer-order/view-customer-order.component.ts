import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../order.service';

@Component({
  selector: 'app-view-customer-order',
  templateUrl: './view-customer-order.component.html',
  styleUrls: ['./view-customer-order.component.css']
})
export class ViewCustomerOrderComponent implements OnInit {
  allOrder={
    orderId :0,
    quantity:0,
    orderTotal: 0,
    status: '',
    paymentMethod: '',
    orderDate: new Date(),
    deleted:0,
    
    
  
  }
  
  constructor(private router : Router,
              private activatedRoute : ActivatedRoute,
              private orderService: OrderService) {
                this.router.navigate(['view-customer-order']);
               }

  ngOnInit(): void {
    let orderId : any = this.activatedRoute.snapshot.paramMap.get('orderId')
    console.log(orderId);
    this.orderService.viewOrder(orderId).subscribe((response)=>{
   
     // this.bookForm.setValue(response);
     // console.log(title);
     this.allOrder= response;
     console.log(this.allOrder);
    })

  //  this.orderService.viewOrder(this.allOrder.orderId).subscribe((response)=>{
  //   console.log(response);
  
  // });
  }

  back(){
    this.router.navigate(['list-customer-order']);
  }

}
