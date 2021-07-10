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

  addBookData : book = <book> {
    bookId: 0,
    title: '',
    author : '',
    description : '',
    price : '',
    publishDate : '',
    lastUpdatedOn: '',
    image:'',
    categories :{
      categoryId :0,
      categoryName:'',
      categoryImageUrl:''
    }
    // review:{
    //     reviewId : 0,
    //     headLine :'',
    //     rating : 0,
    //     reviewOn :''
     // }
  }

  constructor(private categoryService :CategoryService,private booksService :BooksService,private router: Router ) { }

  ngOnInit(): void {
  }

  addBook(myForm : NgForm){
    console.log(myForm)
     let mybook : book = {
      bookId: this.addBookData.bookId,
      title: this.addBookData.title,
      author : this.addBookData.author,
      description : this.addBookData.description,
      price : this.addBookData.price,
      publishDate : this.addBookData.publishDate,
      lastUpdatedOn: this.addBookData.lastUpdatedOn,
      image :this.addBookData.image,
      categories : {
        categoryId  :this.categoryService.catg.categoryId,
        categoryName  :this.categoryService.catg. categoryName,
        categoryImageUrl : this.categoryService.catg.categoryImageUrl
      },
       // review: this.addBookData.review  
    }

    console.log("addbokk:" + JSON.stringify(mybook));
    console.log("ca:" +JSON.stringify(this.categoryService.catg));
    // let allBooks = this.booksService.addBook(mybook);
    // console.log(allBooks);

    this.booksService.addBook(mybook).subscribe((response) => {
        console.log(" in add ***: " +JSON.stringify(response));
         //this.router.navigate(['list-all-books']);
        this.router.navigate(['list-admin-books']);
      });
  
    }

    back(){
      this.router.navigate(['list-admin-books']);
    }
  }


