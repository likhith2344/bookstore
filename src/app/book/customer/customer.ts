import { Address } from "../user/address";
import { User } from "../user/User";


export interface Customer{
    mobileNumber : any,
    fullName : string,
    registerOn : any,
    userPojo : User,
  addressPojo:  Address
}