import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { book } from '../bookint';
import { ViewCustomerBookService } from '../view-customer-book.service';

@Component({
  selector: 'app-view-customer-book',
  templateUrl: './view-customer-book.component.html',
  styleUrls: ['./view-customer-book.component.css']
})
export class ViewCustomerBookComponent implements OnInit {
  // bookForm:FormGroup;

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
  book : ''
}

bookData: book[] = [];


  constructor(private viewCustomerService :ViewCustomerBookService,
              private activatedRoute : ActivatedRoute,
              private router :Router) { 
    // this.bookForm = new FormGroup({
    //   title : new FormControl(),
    //   bookId : new FormControl(),
    //   author : new FormControl(),
    //   description : new FormControl(),
    //    image: new FormControl(),
    //   // productImageUrl : new FormControl()
    // })
    this.router.navigate(['view-customer-book']);
  }

  ngOnInit(): void {
    let title : any = this.activatedRoute.snapshot.paramMap.get('title')
    console.log("before response"+title);
    this.viewCustomerService.getBook(title).subscribe((response)=>{
   
      // this.BookData.setValue(response);
      console.log("after response"+title);
     this.BookData= response;
     console.log(this.BookData);
    }),

   this.viewCustomerService.getBook(this.BookData.title).subscribe((response)=>{
    console.log(response);
  
   });

    
  }
 
   back(){
    
    
    // this.allProducts.push(myProduct);
    
    this.router.navigate(['list-customer-book']);
    
  }
  
  buyNow(){
this.router.navigate(['add-order'])
  }
  addReview(review :any){
    this.router.navigate(['review']);
  }
  seeAll(title:any){
     this.router.navigate(['review',title]);
  }
}




