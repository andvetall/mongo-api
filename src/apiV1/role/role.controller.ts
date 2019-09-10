
import { Request, Response } from "express";

import { set } from "mongoose"
import { role } from "./role.model";


export default class UserController {

  public findRoles = async (req: Request, res: Response): Promise<any> => {
    try {

      const roles = await role.find();

      

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

}