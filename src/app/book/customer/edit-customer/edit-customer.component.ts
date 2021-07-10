import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../customer.service';
import { LoginService } from '../../login.service';
import { OrderService } from '../../order.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  constructor(private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
    private loginService :LoginService
    ){}

    customer: Customer= {
      customerId: 0,
      fullName:'',
      mobileNumber: '',
     registerOn : '',
    addressPojo: {
      addressId :0,
      address:'',
      city: '',
      
      country: '',
      pincode: 0
    },
      userPojo:{
        
      username: '',
      password: '',
      role: ''
    }
  }
  

  ngOnInit(): void {
    let username: any = this.activatedRoute.snapshot.paramMap.get('username');
    console.log(username);
       this.orderService.getCustomerByUserName(this.loginService.newuser.username).subscribe((response) => {
         console.log('response' + response)
     this.customer = response;
      console.log(response);
    
    });
  }


  editCustomer() {
    console.log(this.customer)
    this.customerService.updateCustomer(this.customer).subscribe((response) => {
      console.log(response);
      this.router.navigate(['list-customer-book',response]);
    });

  }



}
