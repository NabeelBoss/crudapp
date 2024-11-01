const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

const {dbconnection} = require("./config/db");

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const {fetchuser,Createuser,deleteuser} = require("./controller/controller");
app.route('/signup').get(fetchuser).post(Createuser);
app.route('/signup/:delete').delete(deleteuser);


app.listen(process.env.PORT,function(){
    console.log(`Server is running on ${process.env.PORT}`);
    dbconnection();

})