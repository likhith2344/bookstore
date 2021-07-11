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
   // userPojo :User  
    bookpojo: book[],
    orderDate: Date,
    deleted:number
    // customerPojo: {
    //     customerId: number,
    //     mobileNumber: String,
    //     fullName: String,
    //     registerOn:Date,
    //     addressPojo: {
    //         addressId: number,
    //         address: String,
    //         city: String,
    //         country: String,
    //         pincode: number
    //     }
}
