import { categories } from "./category/category";
import { review } from "./review/review";

export interface book {
    bookId : number,
    title : any,
    author : string,
    description : string,
    price : string,
    publishDate : any,
    lastUpdatedOn : any,
    categories : categories,
    // review : review[],
    image : string
}