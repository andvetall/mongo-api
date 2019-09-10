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
const mongoose_1 = require("mongoose");
const user_model_1 = require("./user.model");
class UserController {
    constructor() {
        this.findAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let arr = [];
                const usersq = yield user_model_1.users.find();
                yield usersq.forEach((user) => {
                    arr.push({
                        firstName: user.firstName,
                        _id: user._id,
                        age: user.age,
                        email: user.email
                    });
                });
                if (!usersq) {
                    return res.status(404).send({
                        success: false,
                        message: 'Users not found',
                        data: null
                    });
                }
                res.status(200).send({
                    success: true,
                    data: arr
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
        this.findOne = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_model_1.users.findById(req.params.id);
                if (!user) {
                    return res.status(404).send({
                        success: false,
                        message: 'User not found',
                        data: null
                    });
                }
                res.status(200).send({
                    success: true,
                    data: user
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
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { firstName, age, email, avatar } = req.body;
            try {
                mongoose_1.set('useFindAndModify', false);
                const filter = { _id: req.params.id };
                const userUpdated = yield user_model_1.users.findOneAndUpdate(filter, {
                    firstName: firstName,
                    age: age,
                    email: email,
                    avatar: avatar
                }, { new: true });
                if (!userUpdated) {
                    return res.status(404).send({
                        success: false,
                        message: 'User not found',
                        data: null
                    });
                }
                res.status(200).send({
                    success: true,
                    data: userUpdated
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
        this.remove = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_model_1.users.findOneAndDelete(req.params.id);
                if (!user) {
                    return res.status(404).send({
                        success: false,
                        message: 'User not found',
                        data: null
                    });
                }
                else {
                    res.status(200).send({
                        message: 'Delete is done!',
                        data: null
                    });
                }
                ;
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
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map