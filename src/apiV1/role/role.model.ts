import {  model, Schema } from "mongoose"

var RoleSchema = new Schema({
  _id: Schema.Types.ObjectId,
    admin: Array,
    user: Array
  
 
},{collection : "usersInRole"});

export const role = model('usersInRole', RoleSchema);