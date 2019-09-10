
import { Request, Response } from "express";

import { set } from "mongoose"
import { users } from "./user.model";


export default class UserController {

  public findAll = async (req: Request, res: Response): Promise<any> => {
    try {


      let arr: any[] = []
      const usersq = await users.find();
      console.log(usersq);
      
      await usersq.forEach((user: any) => {
        arr.push({
          firstName: user.firstName,
          _id: user._id,
          age: user.age,
          email: user.email
        })
      })

      if (!usersq) {
        return res.status(404).send({
          success: false,
          message: 'Users not found',
          data: null
        });
      }
      res.status(200).send({
        success: true,
        users: usersq
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };

  public findOne = async (req: Request, res: Response): Promise<any> => {
    try {

      const user = await users.findById(req.params.id);

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
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };

  public update = async (req: Request, res: Response): Promise<any> => {
    const { firstName, age, email, avatar } = req.body
    try {
      set('useFindAndModify', false);
      const filter = { _id: req.params.id };
      const userUpdated = await users.findOneAndUpdate(filter,
        {
          firstName: firstName,
          age: age,
          email: email,
          avatar: avatar

        },
        { new: true }
      );
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

      const user = await users.findOneAndDelete(req.params.id);
      
      
      if (!user) {
        return res.status(404).send({
          success: false,
          message: 'User not found',
          data: null
        });
      } else {
        res.status(200).send({
          message: 'Delete is done!',
          data: null
        })
      };
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };
}
