import { CustomerService } from "../../customer.service";
import { Customer } from "../../customer/customer";
import { book } from "../bookint";

export interface review {
    headLine : string,
    comment : string,
    rating : number,
    reviewOn : Date,
    book :   book,
    customer : Customer
}