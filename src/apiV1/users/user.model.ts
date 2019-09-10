import {  model, Schema } from "mongoose"

var UsersSchema = new Schema({
  _id: Schema.Types.ObjectId,
  email: String,
  age: Number,
  firstName: String,
},{collection : "users"});

export const users = model('user', UsersSchema);