import { book } from "../books/bookint";
import { review } from "../books/review/review";
import { Customer } from "../customer/customer";
import { Address } from "../user/address";
import { User } from "../user/User";

export interface order{
    orderId :number,
    quantity:number,
    orderTotal: number,
    status: string,
    paymentMethod: string,
    customerPojo: Customer,    
    bookpojo: book[],
    orderDate: Date,
    deleted:number
}
