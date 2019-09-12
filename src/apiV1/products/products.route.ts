import { Router } from "express";
import verifyAdmin from "../../helpers/verifyAdmin";
import Controller from "./products.controller";

const product: Router = Router();
const controller = new Controller();

// Retrieve all books
product.get("/", controller.getProducts);

product.put("/:id", controller.updateProduct);

product.post('/', controller.addProduct)

product.delete("/:id", controller.removeProduct)

product.get('/:id', controller.getOneProduct)

export default product;
