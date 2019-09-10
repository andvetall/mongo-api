"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
var UsersSchema = new mongoose_1.Schema({
    _id: mongoose_1.Schema.Types.ObjectId,
    title: String,
    description: String,
    price: Number
}, { collection: "books" });
exports.books = mongoose_1.model('books', UsersSchema);
//# sourceMappingURL=products.model.js.map