const Mongoose = require("mongoose");
const debug = require("debug")("app.database");

const dbhost = process.env.DBHOST || "localhost";
const dbport = process.env.DBPORT || "27017";
const dbname = process.env.DBNAME || "buho-bolsillo";

const dburi = process.env.DBURI
    || 'mongodb://${dbhost}:{dbport}/${dbname}';

/* 
    Metodo de conexion de BD
*/

const connect = async () => {
    try {
        await Mongoose.connect(uri);
        debug("Connection to DB started")

    }   catch (error) {
        console.error(error);
        debug("Canno connect to DB");
        process.exit(1);
    }
}

const disconnect  = async () => {
    try {
        await Mongoose.disconnect();
        debug("Connection to DB end")
    }   catch (error) {
        process.exit(1);
    }
}

module.exports = {
    connect,
    disconnect
}