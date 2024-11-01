const mongoose = require("mongoose");

async function dbconnection(){
    const connection = await mongoose.connect(process.env.db);
    if(connection)
        console.log("Mongodb is connected with the help of mongoose");
}


module.exports = {dbconnection};