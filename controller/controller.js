const {detail} = require("../model/Userreg");

// Method GET
// API:localhost:5000/signup

async function fetchuser(req,res){
    const user = await detail.find();
    return res.send({"data":user})
}

// Method POST
// API:localhost:5000/signup

async function Createuser(req,res){
    const{UserEmail , UserPass} = req.body;

    const emailchecker = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";

    if(emailchecker.test(UserEmail)){
        const finduser = detail.find({UserEmail:UserEmail.toLowerCase()});
        if(finduser.length > 0)
            return res.send({"Error":"This Email is Taken"});
        
            const user = await detail.create(
                {
                    UserEmail:UserEmail.toLowerCase(),
                    UserPass:UserPass
                }
            )
    }else{
        return res.send({"Error":"Enter Valid Email;"});
    }

}


// Method DELETE
// API:localhost:5000/signup/:delete

async function deleteuser(req,res){
    const deleteuser = await detail.deleteOne({UserEmail:req.params.delete});
    return res.send({"message":"User Has been Deleted"})
}


module.exports = {fetchuser,Createuser,deleteuser}
