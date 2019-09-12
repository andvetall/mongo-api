
import { Request, Response } from "express";

import { set } from "mongoose"
import { roleModel } from "./role.model";
import { users } from "../users/user.model";


export default class UserController {

  public findRoles = async (req: Request, res: Response): Promise<any> => {
    try {
      const roles = await roleModel.find();
      res.status(200).send({
        success: true,
        data: roles
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };

  public remove = async (req: Request, res: Response): Promise<any> => {
    try {
      const roles = await roleModel.find();
      const role = await roleModel.findOneAndUpdate({_id: "5d7254dd1c9d440000bd475f"}, {
        users: req.body
      })
        res.status(200).send({
          message: 'Delete is done!',
          data: role
        })
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };

}