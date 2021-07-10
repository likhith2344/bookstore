import { Injectable } from '@angular/core';
import { book } from '../books/bookint';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor() { }
items :book[]=[]
addToCart(bookData: book) {
  this.items.push(bookData);

}

getItems() {
  return this.items;
}

emptyItems(){
  this.items.splice(0,this.items.length);
}
clearCart(bookId:number) {
  console.log(bookId);
  
 const a=  this.items.findIndex(b => b.bookId==bookId);
if(a!=-1){

 this.items.splice(a,1);
 return this.getItems();
}
else{
return this.getItems();
  }
}


 
 
}
