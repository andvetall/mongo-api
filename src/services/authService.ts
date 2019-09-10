import { authModel, roleModel } from "../apiV1/auth/auth.model";
import { role } from '../apiV1/role/role.model'
import { ObjectID, ObjectId } from "bson";
import { users } from "../apiV1/users/user.model";

interface user {
  email: string;
  password: string;
  firstName: string;
}

export class AuthService {

  public async getUserByEmail(email: string) {
    var user = await authModel.findOne({ email: email });
    if (user) return user;
  }
  public async getUserById(id: ObjectID) {
    var user = await authModel.findOne({ _id: id });
    if (user) return user;
  }

  public async createRole(id: string){
    let role:any = await roleModel.find()
    let arrAll: any = role[0]
    let x:boolean
    for(let i in arrAll.admin){
      console.log( arrAll.admin[i].toString());
      console.log(id.toString());
      arrAll.admin[i].toString() == id.toString() ?  x = true : x = false
    }
      return x
  }

  public async register(user: any) {
    var regUser = await authModel.findOne({ email: user.email });
    if (!regUser) {
      await authModel.create(user);
      let currentUser = await authModel.findOne({email: user.email})
      let _id = currentUser._id
      let roles:any = await roleModel.find()
      let arrAll: any = roles[0].users
      arrAll.push(_id)
      let usersInRole: object = {users: arrAll}
      await roleModel.findOneAndUpdate({_id: "5d7254dd1c9d440000bd475f"}, usersInRole)
    } else return regUser

  }
}
