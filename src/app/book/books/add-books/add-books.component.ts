import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from '../../books.service';
import { CategoryService } from '../../category.service';
import { book } from '../bookint';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  addBookData: book = <book>{
    bookId: 0,
    title: '',
    author: '',
    description: '',
    price: '',
    publishDate: '',
    lastUpdatedOn: '',
    image: '',
    categories: {
      categoryId: 0,
      categoryName: '',
      categoryImageUrl: ''
    }
   
  }

  constructor(private categoryService: CategoryService, private booksService: BooksService, private router: Router) { }

  ngOnInit(): void {
  }

  addBook(myForm: NgForm) {
    console.log(myForm)
    let mybook: book = {
      bookId: this.addBookData.bookId,
      title: this.addBookData.title,
      author: this.addBookData.author,
      description: this.addBookData.description,
      price: this.addBookData.price,
      publishDate: this.addBookData.publishDate,
      lastUpdatedOn: this.addBookData.lastUpdatedOn,
      image: this.addBookData.image,
      categories: {
        categoryId: this.categoryService.catg.categoryId,
        categoryName: this.categoryService.catg.categoryName,
        categoryImageUrl: this.categoryService.catg.categoryImageUrl
      },
      
    }

    
  

    this.booksService.addBook(mybook).subscribe((response) => {
    
    
      this.router.navigate(['list-admin-books']);
    });

  }

  back() {
    this.router.navigate(['list-admin-books']);
  }
}


