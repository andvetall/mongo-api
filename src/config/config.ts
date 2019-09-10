import * as dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

export default {

  APP: process.env.APP || "development",
  PORT: process.env.PORT || "3200",
  DB_CONNECTION: {
    host: process.env.DB_HOST || "mongodb+srv://andvetall:Sk0v0r0dka-1@cluster0-aheoj.mongodb.net/test?retryWrites=true&w=majority",
    database: process.env.DB_NAME || "booksData",
    user: process.env.DB_USER || "andvetall",
    port: process.env.DB_PORT || "3306",
    password: process.env.DB_PASSWORD || "admin"
  },
  JWT_ENCRYPTION: process.env.JWT_ENCRYPTION || "secret",
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || "1h",
  SALT_ROUNDS: process.env.SALT_ROUNDS || 10
};
