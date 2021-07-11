import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../../books.service';
import { CategoryService } from '../../category.service';
import { book } from '../bookint';

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.css']
})
export class EditBooksComponent implements OnInit {

  editBookData : book = <book> {
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

  }
  
  constructor(private booksService :BooksService ,
              private categoryService : CategoryService,
                        private activatedRoute : ActivatedRoute,
                        private router :Router) { }

  ngOnInit(): void {

    let bkid: any = this.activatedRoute.snapshot.paramMap.get('bookId');
 
    console.log(bkid);
  
      this.booksService.getBook(bkid).subscribe((response) => {
          console.log('response' + response)
     
    this.editBookData = response;
     
     console.log(response);
     
     });
    }
  

  editBook() {
  
    console.log(this.editBookData)

   this.editBookData.categories = this.categoryService.catg;
    this.booksService.updateBook(this.editBookData).subscribe((response) => {
      
       this.router.navigate(['list-admin-books']);
   
      });
  
    }

    back(){
      this.router.navigate(['list-admin-books']);
    }
}
