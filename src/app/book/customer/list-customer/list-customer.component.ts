import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  myError = '';
  constructor(private customerService : CustomerService,private router :Router) { }
  allCustomer : Customer[]=[];

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe((response)=>{
console.log(response);
this.allCustomer= response;
    
  },
  (error) => {
    console.log(error.error.message);
    this.myError = error.error.message;
  });
  console.log("this is after the asynchronous call")


}
}
