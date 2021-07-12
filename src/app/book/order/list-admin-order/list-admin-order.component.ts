import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../order.service';

@Component({
  selector: 'app-list-admin-order',
  templateUrl: './list-admin-order.component.html',
  styleUrls: ['./list-admin-order.component.css']
})
export class ListAdminOrderComponent implements OnInit {

  title: string = "List all book details"
  allOrders: any[] = [];
  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.orderService.getAllOrderss().subscribe((response) => {
      console.log("resp in LAO:" + JSON.stringify(response));
      this.allOrders = response;
      console.log(this.allOrders);
    });
  }


  listAllOrders() {
    this.orderService.getAllOrderss().subscribe((response) => {
      console.log("resp*****:" + response);
      this.allOrders = response;
      console.log("allOrders:" + this.allOrders);
    });
    console.log("aync");

  }


}
