import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {

  addCustomerData = {
    customerId: 0,
    mobileNumber :0,
    fullName : '',
    registerOn : '',
    userPojo:{
        email: '',
        password:'',
        role: "customer",
        username : ''
    },
  addressPojo:  {
    addressId:0,
        address : '',
        city : '',
        pincode: 0,
        country : ''
    }

  }

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
  }

  Register(){
    console.log(this.addCustomerData);
    this.loginService.register(this.addCustomerData).subscribe((response) => {
      console.log(response);
      this.router.navigate(['authenticate']);
    },
    (error) => {
      console.log(error);
    })

  }

}
