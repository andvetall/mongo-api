"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_model_1 = require("../apiV1/products/products.model");
class ProductService {
    getProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield products_model_1.books.find();
        });
    }
    addProduct(book) {
        return __awaiter(this, void 0, void 0, function* () {
            yield products_model_1.books.create(book);
        });
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=productsService.js.map