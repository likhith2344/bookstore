import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { categories } from './books/category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  storeCategoryId : number =0;

  categoryCount : number = 0;
  categoryCnt :Array<Number> = [];
  catg : categories ={
    categoryId  : 0,
    categoryName : " ",
    categoryImageUrl :''
  }

  // allCategories: Category[] = [
  //   {
  //     categoryId: 7,
  //     categoryName: 'drama',
  //     categoryImageUrl: 'https://images.unsplash.com/photo-1479708231022-4be40f711aad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bm92ZWwlMjBpbWFnZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  //   },
  //   {
  //     categoryId: 2,
  //     categoryName: 'thriller',
  //     categoryImageUrl: 'https://images.unsplash.com/photo-1479708231022-4be40f711aad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bm92ZWwlMjBpbWFnZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  //   },
  //   {
  //     categoryId: 9,
  //     categoryName: 'horror',
  //     categoryImageUrl: 'https://images.unsplash.com/photo-1479708231022-4be40f711aad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bm92ZWwlMjBpbWFnZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'

  //   }
  // ]
  allCategories: categories[]=[];
  constructor(private http : HttpClient/*private  upCService :UpdCategoryService*/) { }


  getAllCategories() : Observable<categories[]>{
    return this.http.get<categories[]>("http://localhost:9001/api/v1/category");
  }
  addCategory(newCategory : categories) :Observable<categories>{
    return this.http.post<categories> ("http://localhost:9001/api/v1/category",newCategory);
  }
  deleteBook(CategoryId: number) :Observable<Boolean>{
    return this.http.delete<Boolean>("http://localhost:9001/api/v1/category/" + CategoryId);
  }
  //categoryid
  copyCCId(categoryId : number){
    this.storeCategoryId = categoryId;
  }

  copyCatg(catg : categories){
    this.catg = catg;
  }
  getCategory():string{
    let flag:number=0;
   // console.log("id:"+ this.storeCategoryId);
    for (let index = 0; index < this.allCategories.length; index++) {
     if(this.allCategories[index].categoryId == this.storeCategoryId){
      //  this.catg.categoryId = this.allCategories[index].categoryId;
      //  this.catg.categoryName = this.allCategories[index].categoryName;
      //  this.catg.categoryImageUrl = this.allCategories[index].categoryImageUrl;
      flag=1;
     }
     if(flag==1)
     {
     // console.log("matches:" +JSON.stringify(this.allCategories[index].categoryId));
     return this.allCategories[index].categoryName;
     }
    }
    return '';
  }


  ctype(ccid : number){
    // console.log("check: "+ this.allCategories);
  }

  // copyCategories(allcategories : Category[]){
  //   this.allCategories = allcategories;
  // }
  // setCategory(cid: number) {
  //   this.storeCategoryId =  cid;
  //   console.log("setted cid to storeCategryId :" +this.storeCategoryId);
  //   console.log(" copied cats:" + this.allCategories);  
  //   for (let index = 0; index < this.allCategories.length; index++) {
  //    console.log(" iiiii:" + this.allCategories[index].categoryId);  
  //   }
  // }

  cattype():string {
    for (let index = 0; index < this.allCategories.length; index++) {
     if(this.allCategories[index].categoryId == this.storeCategoryId)
        return this.allCategories[index].categoryName;
    }
    return '';
  }
  
//  getcategory(ctype: number) : Category {
//    for (let index = 0; index < this.allCategories.length; index++) {
//      if(this.allCategories[index].categoryId == ctype)
//      {
//        console.log("category service: matches" + ctype);
//        this.storeMatchedCategory.categoryId = this.allCategories[index].categoryId;
//        this.storeMatchedCategory.categoryName = this.allCategories[index].categoryName;
//        this.storeMatchedCategory.categoryImageUrl = this.allCategories[index].categoryImageUrl;
//      }
//    }
//    return this.storeMatchedCategory;
    // switch (ctype) {
    //   case 1:
    //     this.catg.categoryId =1;
    //     this.catg.categoryName ="Novel";
    //     return this.catg;
    //   case 2:
    //     this.catg.categoryId =2;
    //     this.catg.categoryName = "Literature";
    //     return this.catg; 
    //   case 3:
    //     this.catg.categoryId  = 3;
    //     this.catg.categoryName = "GenreFiction"; 
    //     return this.catg;
    //   case 4:
    //     this.catg.categoryId = 4;
    //     this.catg.categoryName = "ActionAdventure"; 
    //     return this.catg;
    //   case 5:
    //     this.catg.categoryId  = 5;
    //     this.catg.categoryName = "Comic"; 
    //     return this.catg;
    //   case 6:
    //     this.catg.categoryId  = 6;
    //     this.catg.categoryName = "Detective"; 
    //     return this.catg;
    //   default :
    //      return this.catg;
   // }
  
  // getCategoryCount()
  // {
  //   return this.categoryCount;
  // }

  // incCategoryCount()
  // {
  //   this.categoryCount++;
    
  // }

  // getAllCategories(): Category [] {
  //   for (let index = 0; index < this.allCategories.length; index++) {
  //     this.categoryCnt[index]= this.allCategories[index].categoryId; 
  //     console.log("catcont:"+ this.categoryCnt[index]);   
  //   }
  //   console.log("catcont:"+ this.categoryCnt);
  //   return this.allCategories;
  // }
  // addCategory(newCategory: Category): Category[] {

  //   newCategory.categoryId = this.allCategories[this.allCategories.length - 1].categoryId + 1;
  //   this.allCategories.push(newCategory);
  //   this.incCategoryCount();
  //   // this.upCService.insertIntoUpdCategory(newCategory);
  // //  this.categoryStore.categorycnt = this.categoryCount;
  // //  this.categoryStore.categoryId = this.allCategories.findIndex
  //   console.log("in adc:  "+this.categoryCount);
  //   return this.allCategories;
  // }

  //   updateBook(updateBook : Book): Book[] {
  //   // newBook.bookId = this.allBooks[this.allBooks.length - 1].bookId + 1;
  //   // newBook.categories = this.getcategory(this.catg.categoryId);
  //   let bookIndex = this.allBooks.findIndex((book) => book.bookId == updateBook.bookId);
  //   this.allBooks[bookIndex]=updateBook;
  //   return this.allBooks;
  // }
  // }
  // getBook(bookId: number): any{
  //   let book =  this.allBooks.find((bk) => bk.bookId==bookId);
  //   return book;
  // }*/

}
