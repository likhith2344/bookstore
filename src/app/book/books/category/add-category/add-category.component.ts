import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/book/category.service';
import { categories } from '../category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  allCategories: categories[]=[];
  addCategoryForm : FormGroup;
  constructor(private categoryService :CategoryService ,
                      private activatedRoute : ActivatedRoute,
                      private router :Router) { 
     this.addCategoryForm = new FormGroup({
      categoryId: new FormControl(),
      categoryName: new FormControl('',[Validators.required,
                                      Validators.minLength(3),
                                      Validators.maxLength(15)]),
      categoryImageUrl : new FormControl(),                            
    })   
  }
  ngOnInit(): void {

  }
  back(){
    this.router.navigate(['manage-book']);
  }
  addCategory()
  {
    // console.log(this.addCategoryForm.value);
    // this.allCategories = this.categoryService.addCategory(this.addCategoryForm.value);
    // console.log("in add-cat:" +this.categoryService.categoryCount);
    // this.router.navigate(['list-category']); 

    this.categoryService.addCategory(this.addCategoryForm.value).subscribe((response)=>{
      console.log(response);
      this.router.navigate(['list-category']); 

    
    });

  }

}




