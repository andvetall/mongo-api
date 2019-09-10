import { Router } from "express";
import verifyAdmin from "../../helpers/verifyAdmin";
import Controller from "./products.controller";

const product: Router = Router();
const controller = new Controller();

// Retrieve all books
product.get("/", controller.getProducts);

product.put("/", controller.addProduct);

product.post('/', controller.addProduct)

export default product;
