"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyToken_1 = require("../../helpers/verifyToken");
const user_controller_1 = require("./user.controller");
const user = express_1.Router();
const controller = new user_controller_1.default();
// Retrieve all Users
user.get('/', controller.findAll);
// Retrieve a Specific User
user.get('/:id', verifyToken_1.default, controller.findOne);
// Update a User with Id
user.put('/:id', controller.update);
// Delete a User with Id
user.delete('/:id', controller.remove);
exports.default = user;
//# sourceMappingURL=user.route.js.map