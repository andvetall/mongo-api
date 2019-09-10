import { model, Schema } from "mongoose"
import { any } from "bluebird";

var AuthSchema = new Schema({
  _id: Schema.Types.ObjectId,
  email: String,
  password: String,
  isAdmin: Boolean,
  login: String,
  details: Object,
  userImg: String
}, {
    collection: 'users'
  }
);

var RoleSchema = new Schema({
  _id: Schema.Types.ObjectId,
    admin: Array,
    users: Array
  
 
},{collection : "usersInRole"});


export const authModel = model('users', AuthSchema);
export const roleModel = model('usersInRole', RoleSchema)