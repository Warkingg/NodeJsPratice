import { Router } from "express";
import CustomerController from "../controllers/CustomerController";
import OrderController from "../controllers/OrderController";
import { CustomerService } from "../services/CustomerService";


  const router = Router();


  // Create a new user
  router.post("/create", CustomerController.createCustomer);

  // Create a new order
  router.post("/order", OrderController.createOrder);


  export default router;