const mongoose = require("mongoose");

const userdetail_model = mongoose.Schema(
    
    {
        UserEmail:{
            type:String,
            required:[true,"Enter Your Email"]
        },


        UserPass:{
            type:String,
            required:[true,"Enter Your Password"]

        }
    }

)

const detail = mongoose.model("Userregg" , userdetail_model);
module.exports = {detail}