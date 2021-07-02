import { Customer } from "../entity/Customer";
import { Request, Response } from "express";
import {getConnection} from "typeorm";

export class CustomerService {
    public static createCustomers = async ({firstName, lastName,age ,sex}) => {
    await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Customer)
    .values([
        { firstName, lastName,age ,sex }, 
     ])
    .execute();
}
}
