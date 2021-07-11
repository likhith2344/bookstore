import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../../books.service';
import { book } from '../bookint';

@Component({
  selector: 'app-list-all-books',
  templateUrl: './list-all-books.component.html',
  styleUrls: ['./list-all-books.component.css']
})
export class ListAllBooksComponent implements OnInit {

  title:string ="List all book details"
  allBooks : book[] = [];
  constructor(private booksService: BooksService,private router : Router) { }

  ngOnInit(): void {
    this.booksService.getAllBooks().subscribe((response)=>{
          console.log("resp:" +JSON.stringify(response));
         this.allBooks = response;
         this.router.navigate(['list-all-books']);
         //this.router.navigate(['list-admin-books']);
    });
    

  }

  listAllBooks(){
   let book :any =this.booksService.getAllBooks();
   console.log("json obj:" + JSON.stringify(book));
  }

  deleteBook(bkId: number){ 
    console.log("before del:"+ JSON.stringify(this.allBooks));
    console.log(bkId);
    this.booksService.deleteBook1(bkId).subscribe((response)=>{   // changed to deletebook1
      console.log(response);
      // this.ngOnInit();        //c
     this.allBooks = response;   //added
     // this.ngOnInit();        //c
     // this.router.navigate(['list-all-books']);
    });
  }
  
  editBook(bkId: number){   
    this.router.navigate(['edit-book',bkId]);
  }


}
