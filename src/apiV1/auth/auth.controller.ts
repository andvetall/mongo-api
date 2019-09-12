import * as bcrypt from "bcrypt";
import { Request, Response } from "express";
import * as jwt from "jwt-then";
import config from "../../config/config";
import { AuthService } from "../../services/authService";
// import findRoles from "../role/role.controller"

// import { roleModel } from "./auth.model";

export default class UserController {
  public authenticate = async (req: Request, res: Response): Promise<any> => {
    const { email, password } = req.body;
    try {
      const user: any = await new AuthService().getUserByEmail(email);
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "User not found",
          isLoggedIn: false,
        });
      }
      const matchPasswords = await bcrypt.compare(password, user.password);
      if (!matchPasswords) {
        return res.status(401).send({
          success: false,
          message: "Not authorized",
          isLoggedIn: false
        });
      }else {
        const role = await new AuthService().createRole(user._id.toString())
        const token = await jwt.sign(
        {
          email: user.email,
          isAdmin: role,
          isLoggedIn: true,
          _id : user._id,
          login: user.login,
          details: user.details
        },
        config.JWT_ENCRYPTION,
        { expiresIn: config.JWT_EXPIRATION }
      );
      
        res.status(200).send({
          success: true,
          message: "Token generated Successfully",
          token: token,
        });
      }
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        isLoggedIn: false
      });
    }
  };

  public register = async (req: Request, res: Response): Promise<any> => {
    const user: any = {
      _id: null,
      userImg: req.body.img,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, config.SALT_ROUNDS),
      login: req.body.login,
      details: req.body.details
    };
    

    try {
      const matchUser: any = await new AuthService().register(user);
      let checkPass = () => {
        if(req.body.password === req.body.passwordComfirm){
          return true
        } else {return false}
      }
      
      if (!matchUser) {
        res.status(200).send({
          success: true,
          message: "User Successfully created",
          data: user
        });

      }else if(!checkPass()){
        return res.status(402).send({
          success: false,
          message: `Passwords are not same`
        })
      }
       else return res.status(401).send({
        success: false,
        message: `User with E-mail: "${matchUser.email}" alredy exist!`
      });

    } catch (err) {
      res.status(500).send({
        success: false,
        message: err
      });
    }
  };
}