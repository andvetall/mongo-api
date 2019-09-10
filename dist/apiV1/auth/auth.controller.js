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
const bcrypt = require("bcrypt");
const jwt = require("jwt-then");
const config_1 = require("../../config/config");
const authService_1 = require("../../services/authService");
class UserController {
    constructor() {
        this.authenticate = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            try {
                const user = yield new authService_1.AuthService().getUserByEmail(email);
                if (!user) {
                    return res.status(404).send({
                        success: false,
                        message: "User not found",
                        isLoggedIn: false
                    });
                }
                const matchPasswords = yield bcrypt.compare(password, user.password);
                if (!matchPasswords) {
                    return res.status(401).send({
                        success: false,
                        message: "Not authorized",
                        isLoggedIn: false
                    });
                }
                const isAdmin = (user.roleId === 0 ? true : false);
                const token = yield jwt.sign({
                    email: user.email,
                    firstName: user.firstName,
                    age: user.age,
                    avatar: user.avatar,
                    isAdmin: isAdmin,
                    _id: user._id
                }, config_1.default.JWT_ENCRYPTION, { expiresIn: config_1.default.JWT_EXPIRATION });
                res.status(200).send({
                    success: true,
                    message: "Token generated Successfully",
                    token: token,
                    isLoggedIn: true
                });
            }
            catch (err) {
                res.status(500).send({
                    success: false,
                    message: err.toString(),
                    isLoggedIn: false
                });
            }
        });
        this.register = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const user = {
                _id: null,
                email: req.body.email,
                password: yield bcrypt.hash(req.body.password, config_1.default.SALT_ROUNDS),
                firstName: req.body.firstName,
                age: req.body.age,
                roleId: 1
            };
            try {
                const matchUser = yield new authService_1.AuthService().register(user);
                if (!matchUser) {
                    res.status(200).send({
                        success: false,
                        message: "User Successfully created",
                        data: user
                    });
                }
                else
                    return res.status(401).send({
                        success: false,
                        message: `User with E-mail:${matchUser.email} alredy exist!`
                    });
            }
            catch (err) {
                res.status(500).send({
                    success: false,
                    message: err
                });
            }
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=auth.controller.js.map