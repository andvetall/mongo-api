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
const jwt = require("jwt-then");
const config_1 = require("../config/config");
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // check header or url parameters or post parameters for token
    const token = req.headers.authorization;
    if (!token) {
        return res.status(403).send({
            auth: false,
            message: "No token provided."
        });
    }
    try {
        // verifies secret and checks exp
        const decoded = yield jwt.verify(token, config_1.default.JWT_ENCRYPTION);
        req.email = decoded.email;
        next();
    }
    catch (err) {
        res.status(500).send({
            auth: false,
            message: err
        });
    }
});
exports.default = verifyToken;
//# sourceMappingURL=verifyToken.js.map