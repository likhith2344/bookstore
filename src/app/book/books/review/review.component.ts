import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { book } from '../bookint';
import { ViewCustomerBookService } from '../view-customer-book.service';
import { review } from './review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  BookData= {
    bookId : 0,
    title : '',
    author : '',
    description : '',
    price : '',
    publishhDate : '',
    lastUpdatedOn : '',
    image : ''
}
reviewData={
  headLine : '',
  comment : '',
  rating : '',
  reviewOn : '',
  book : '',
  customer:''
}

reviewsData: review[] = [];


  constructor(private viewCustomerService :ViewCustomerBookService,
              private activatedRoute : ActivatedRoute,
              private router :Router){
                
              }

  ngOnInit(): void {
  }
  submit(){
    
  }

}
