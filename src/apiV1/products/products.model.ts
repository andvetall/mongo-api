import { model, Schema } from "mongoose"

var UsersSchema = new Schema({
 body: Object
}, { collection: "books" });

export const books = model('books', UsersSchema);