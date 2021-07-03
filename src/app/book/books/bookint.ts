import { categories } from "./category/category";
import { review } from "./review/review";

export interface book {
    title : string,
    author : string,
    description : string,
    price : string,
    publishhDate : Date,
    lastUpdatedOn : Date,
    categories : categories,
    review : review,
    image : string
}