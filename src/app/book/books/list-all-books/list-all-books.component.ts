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

  title: string = "List all book details"
  allBooks: book[] = [];
  constructor(private booksService: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.booksService.getAllBooks().subscribe((response) => {
     
      this.allBooks = response;
      this.router.navigate(['list-all-books']);
     
    });


  }

  listAllBooks() {
    let book: any = this.booksService.getAllBooks();
    console.log("json obj:" + JSON.stringify(book));
  }

  deleteBook(bkId: number) {
    
    this.booksService.deleteBook1(bkId).subscribe((response) => {   
      console.log(response);
     
      this.allBooks = response;   
      ;
    });
  }

  editBook(bkId: number) {
    this.router.navigate(['edit-book', bkId]);
  }


}
