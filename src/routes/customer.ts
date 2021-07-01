import { Router } from "express";
import { CustomerService } from "../services/CustomerService";


  const router = Router();


  // Create a new user
  router.post("/", CustomerService.newCustomer);


  export default router;