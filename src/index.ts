import app from "./App";
import CONFIG from "./config/config";
 import "./config/db.connection";
import { connect, connection, model, Schema, Collection, Mongoose } from "mongoose"

const PORT = CONFIG.PORT;

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
}
);
