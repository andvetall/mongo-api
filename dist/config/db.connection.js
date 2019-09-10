"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.default = (() => __awaiter(void 0, void 0, void 0, function* () {
    const uri = "mongodb+srv://andvetall:Sk0v0r0dka-1@cluster0-aheoj.mongodb.net/test?retryWrites=true&w=majority";
    mongoose_1.connect(uri, {
        useNewUrlParser: true,
        dbName: 'booksData'
    }).catch((e) => {
        console.log('Database connectivity error ', e);
    });
    const db = mongoose_1.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log("connected");
    });
}))();
//# sourceMappingURL=db.connection.js.map