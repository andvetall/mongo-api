import {  model, Schema } from "mongoose"

var RoleSchema = new Schema({
  _id: Schema.Types.ObjectId,
    admin: Array,
    users: Array
},{collection : "usersInRole"});

export const roleModel = model('usersInRole', RoleSchema)