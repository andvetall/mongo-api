"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
var AuthSchema = new mongoose_1.Schema({
    _id: mongoose_1.Schema.Types.ObjectId,
    email: String,
    password: String,
    age: Number,
    firstName: String,
    roleId: Number,
    avatar: String
}, {
    collection: 'users'
});
exports.authModel = mongoose_1.model('users', AuthSchema);
//# sourceMappingURL=auth.model.js.map