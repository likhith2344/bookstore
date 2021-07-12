import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/book/books.service';
import { CategoryService } from 'src/app/book/category.service';
import { categories } from '../category';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  title: string = "Im in list-category"
  allCategories: categories[] = [];
  ccId: number = 0;

  categoryCnt: Array<number> = [];

  storeMatchedCategory: categories = {
    categoryId: 0,
    categoryName: '',
    categoryImageUrl: ''
  }

  constructor(private categoryService: CategoryService,
    private bookService: BooksService,
    private router: Router) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((response) => {
      this.allCategories = response;
      console.log("allcategories:" + JSON.stringify(this.allCategories));
      this.router.navigate(['list-category']);
    });

  }
  back() {
    this.router.navigate(['manage-book']);
  }
  imageClick(categoryId: number) {
    let ov: number = 0;
    this.ccId = categoryId;
    console.log("in imageclick:" + this.ccId);
    console.log("image obj:" + JSON.stringify(this.allCategories));
    this.categoryService.allCategories = this.allCategories;

    console.log("image obj**:" + JSON.stringify(this.categoryService.allCategories[0]));
    for (let index = 0; index < this.categoryService.allCategories.length; index++) {
      if (parseInt(JSON.stringify(this.categoryService.allCategories[index].categoryId)) == categoryId) {
        console.log("mmatched...." + JSON.stringify(this.categoryService.allCategories[index].categoryId));
        this.storeMatchedCategory.categoryId = parseInt(JSON.stringify(this.categoryService.allCategories[index].categoryId));
        this.storeMatchedCategory.categoryName = JSON.stringify(this.categoryService.allCategories[index].categoryName);
        this.storeMatchedCategory.categoryImageUrl = JSON.stringify(this.categoryService.allCategories[index].categoryImageUrl);
       
      }
    }
    this.categoryService.copyCatg(this.storeMatchedCategory);
    
    this.categoryService.copyCCId(categoryId);
    console.log("-------");
    this.router.navigate(['list-admin-books']);
  }


  deleteCategory(CategoryId: number) {
    console.log(CategoryId);
    this.categoryService.deleteBook(CategoryId).subscribe((response) => {
      console.log(response);
      this.ngOnInit();


    });
  }

}
