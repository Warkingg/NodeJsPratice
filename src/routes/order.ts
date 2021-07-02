import { Router } from "express";
import OrderController from "../controllers/OrderController";



  const router = Router();


  // Create a new order
  router.post("/order", OrderController.createOrder);


  export default router;