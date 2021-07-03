import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-customer-book',
  templateUrl: './view-customer-book.component.html',
  styleUrls: ['./view-customer-book.component.css']
})
export class ViewCustomerBookComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
   
  }
back(){
  this.router.navigate(['list-customer-book']);
}
}
