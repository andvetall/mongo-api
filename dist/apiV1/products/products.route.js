"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyAdmin_1 = require("../../helpers/verifyAdmin");
const products_controller_1 = require("./products.controller");
const product = express_1.Router();
const controller = new products_controller_1.default();
// Retrieve all books
product.get("/", controller.getProducts);
product.put("/", verifyAdmin_1.default, controller.addProduct);
exports.default = product;
//# sourceMappingURL=products.route.js.map