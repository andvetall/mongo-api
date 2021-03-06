"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config({ path: "../../.env" });
exports.default = {
    APP: process.env.APP || "development",
    PORT: process.env.PORT || "3200",
    DB_CONNECTION: {
        host: process.env.DB_HOST || "mongodb+srv://mopiiex:admin@dbforapitext-unteh.azure.mongodb.net/test?retryWrites=true&w=majority",
        database: process.env.DB_NAME || "users",
        user: process.env.DB_USER || "mopiiex",
        port: process.env.DB_PORT || "3306",
        password: process.env.DB_PASSWORD || "admin"
    },
    JWT_ENCRYPTION: process.env.JWT_ENCRYPTION || "secret",
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || "1h",
    SALT_ROUNDS: process.env.SALT_ROUNDS || 10
};
//# sourceMappingURL=config.js.map