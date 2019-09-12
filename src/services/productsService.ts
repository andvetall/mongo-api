import CONFIG from "../config/config";
import { books } from "../apiV1/products/products.model";
import conn from "../config/db.connection";
import to from "await-to-js";


export class ProductService {
  public async getProducts(): Promise<any[]> {

    return await books.find()
  }
  public async addProduct(book: any) {
    
    await books.create(book);
  }
  public async updateProduct(id:any, book: any){
    await books.findByIdAndUpdate(id, book)
  }
  public async getOneProduct(id:any){
    return await books.findById(id)
  }
}
