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
const productsService_1 = require("../../services/productsService");
class ProductsController {
    constructor() {
        this.getProducts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                var books = yield new productsService_1.ProductService().getProducts();
                res.status(200).send({
                    success: true,
                    data: books
                });
            }
            catch (err) {
                res.status(500).send({
                    success: false,
                    message: err.toString(),
                    data: null
                });
            }
        });
        this.addProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                var books = {
                    _id: null,
                    title: req.body.title,
                    description: req.body.description,
                    price: req.body.price
                };
                yield new productsService_1.ProductService().addProduct(books);
                res.status(200).send({
                    success: true
                });
            }
            catch (err) {
                res.status(500).send({
                    success: false,
                    message: err.toString(),
                    data: null
                });
            }
        });
    }
}
exports.default = ProductsController;
//# sourceMappingURL=products.controller.js.map