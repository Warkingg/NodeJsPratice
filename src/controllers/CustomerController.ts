import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { validate } from "class-validator";
import { Customer } from "../entity/Customer";
import { CustomerService } from "../services/CustomerService";


class CustomerController{
 public static createCustomer = async (req, res,next) => {
       try{
          const  newCustomer = await CustomerService.createCustomers(req.body);
        } catch (e) {
            res.status(409).send("Cannot create new customer");
            return;
          }
        
          //If all ok, send 201 response
          res.status(201).send("New customer created");
        };
    }
export default CustomerController;