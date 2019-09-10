"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = require("./auth/auth.route");
const auth_route_2 = require("./auth/auth.route");
const user_route_1 = require("./users/user.route");
const products_route_1 = require("./products/products.route");
const router = express_1.Router();
router.use("/env", (req, res) => {
    res.json(process.env);
});
router.use("/", auth_route_1.default);
router.use("/users", user_route_1.default);
router.use("/register", auth_route_2.default);
router.use("/books", products_route_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map