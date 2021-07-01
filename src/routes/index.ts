import { Router, Request, Response } from "express";
import auth from "./auth";
import user from "./user";
import customer from "./customer";
const routes = Router();

routes.use("/auth", auth);
routes.use("/user", user);
routes.use("/customer", customer);

export default routes;
