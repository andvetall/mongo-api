"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
var UsersSchema = new mongoose_1.Schema({
    _id: mongoose_1.Schema.Types.ObjectId,
    email: String,
    age: Number,
    firstName: String,
}, { collection: "users" });
exports.users = mongoose_1.model('user', UsersSchema);
//# sourceMappingURL=user.model.js.map