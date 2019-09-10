"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const config_1 = require("./config/config");
require("./config/db.connection");
const PORT = config_1.default.PORT;
App_1.default.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map