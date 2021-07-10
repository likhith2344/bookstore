import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/book/books.service';
import { CategoryService } from 'src/app/book/category.service';
import { categories } from '../../category/category';

@Component({
  selector: 'app-manage-books',
  templateUrl: './manage-books.component.html',
  styleUrls: ['./manage-books.component.css']
})
export class ManageBooksComponent implements OnInit {

  constructor(private router : Router,private bookc:BooksService,private categoryService : CategoryService) { }
  allCategories: categories[]=[];
  
  ngOnInit(): void {
  }

  addCategory()
  {
    this.router.navigate(['add-category']);
  }
  viewCategory(){
    this.router.navigate(['list-category']);
  }

}
