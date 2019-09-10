"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const index_1 = require("./apiV1/index");
const errorHandler = require("./helpers/errorHandler");
class App {
    constructor() {
        this.express = express();
        this.setMiddlewares();
        this.setRoutes();
        this.catchErrors();
    }
    setMiddlewares() {
        this.express.use(cors());
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(helmet());
    }
    setRoutes() {
        this.express.use('/v1', index_1.default);
    }
    catchErrors() {
        this.express.use(errorHandler.notFound);
        this.express.use(errorHandler.internalServerError);
    }
}
exports.default = new App().express;
//# sourceMappingURL=App.js.map