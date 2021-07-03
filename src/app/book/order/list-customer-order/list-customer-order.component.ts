import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-customer-order',
  templateUrl: './list-customer-order.component.html',
  styleUrls: ['./list-customer-order.component.css']
})
export class ListCustomerOrderComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    
  }

}
