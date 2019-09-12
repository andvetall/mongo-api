import {  model, Schema } from "mongoose"

var UsersSchema = new Schema({
  _id: Schema.Types.ObjectId,
  login: String,
  email: String,
  details: Object,
  address: Object,
  city: String,
  country: String,
  house: Number,
  street: String,
  appartment: Number,
  website: String,
  userImg: String,  
  mobile: String,
},{collection : "users"});

export const users = model('user', UsersSchema);