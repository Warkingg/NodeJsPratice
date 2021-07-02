import { Router, Request, Response } from "express";
import auth from "./auth";
import user from "./user";
import customer from "./customer";
import order from "./order";
const routes = Router();

routes.use("/auth", auth);
routes.use("/user", user);
routes.use("/customer", customer);
routes.use("/order", order);

export default routes;
