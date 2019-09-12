import { Router } from "express";
import auth from "./auth/auth.route";
import signUp from "./auth/auth.route";
import users from "./users/user.route"
import products from "./products/products.route";
import role from "./role/role.route"
import logOut from "./auth/auth.route";

const router: Router = Router();

router.use("/env", (req, res) => {
  res.json(process.env);
});
router.use("/", auth);
router.use("/users", users);
router.use("/register", signUp);
router.use("/books", products);
router.use("/usersInRole", role)

export default router;
