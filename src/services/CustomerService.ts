import { Customer } from "../entity/Customer";
import { Request, Response } from "express";

export class CustomerService {
    static newCustomer = async (req: Request, res: Response) => {
        //Get parameters from the body
        let { customerId, firstName, lastName, age, sex } = req.body;
        let customer = new Customer();

    }
}
