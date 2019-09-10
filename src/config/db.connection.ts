import { connection, connect } from "mongoose";

export default (async () => {
    const uri = "mongodb+srv://andjulia:1111qqqq@cluster0-ncgct.azure.mongodb.net/test?retryWrites=true&w=majority"
    connect(uri, {
        useNewUrlParser: true,
        dbName: 'books'
    }).catch((e) => {
        console.log('Database connectivity error ', e)
    })
    const db: any = connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log("connected");
    });
})();
