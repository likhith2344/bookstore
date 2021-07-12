import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../../books.service';
import { CategoryService } from '../../category.service';
import { book } from '../bookint';

@Component({
  selector: 'app-list-admin-books',
  templateUrl: './list-admin-books.component.html',
  styleUrls: ['./list-admin-books.component.css']
})
export class ListAdminBooksComponent implements OnInit {



  title: string = "LIST OF BOOKS...";

  allBooks: book[] = [];
  constructor(private booksService: BooksService,
    private categoryService: CategoryService,
    private router: Router) { }

  ngOnInit(): void {
    this.booksService.getAllBooks().subscribe((response) => {
      console.log(response);
      this.allBooks = response;
      this.router.navigate(['list-admin-books']);
    });

  }

  back() {
   
    this.router.navigate(['list-category']);
  }

 
  ctype(): string {
    return this.categoryService.getCategory();
  }

  getCategoryType(): any {

  }

 

  deleteBook(bkId: number) {
    this.booksService.deleteBook1(bkId).subscribe((response) => {
      console.log(response);
      this.allBooks = response;  //added
    });
  }

  editBook(bkId: number) {
    this.router.navigate(['edit-book', bkId]);
  }

  

  listBooksForAdmin() {
    this.booksService.getAllBooks();
  }
  

  goToAdd(): void {
    this.router.navigate(['add-book']);
  }

 
}



