import * as bcrypt from "bcrypt";
import { Request, Response } from "express";
import * as jwt from "jwt-then";
import config from "../../config/config";
import { books } from "./products.model";
import { ProductService } from "../../services/productsService";

export default class ProductsController {
  public getProducts = async (req: Request, res: Response): Promise<any> => {
    try {

      var books = await new ProductService().getProducts();

      res.status(200).send({
        success: true,
        data: books
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };

  public addProduct = async (req: Request, res: Response): Promise<any> => {
    try {
      
      var books = {
      body: req.body
      }
      await new ProductService().addProduct(books);
// console.log(books);

      res.status(200).send({
        success: true
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };
}
