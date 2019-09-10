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
const auth_model_1 = require("../apiV1/auth/auth.model");
class AuthService {
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            var user = yield auth_model_1.authModel.findOne({ email: email });
            if (user)
                return user;
        });
    }
    register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            var regUser = yield auth_model_1.authModel.findOne({ email: user.email });
            if (!regUser) {
                yield auth_model_1.authModel.create(user);
            }
            else
                return regUser;
        });
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=authService.js.map