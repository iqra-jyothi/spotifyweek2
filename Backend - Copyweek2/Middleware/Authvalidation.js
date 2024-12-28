const joi=require('joi');
const { Schema } = require('mongoose');
const signupvalidation=(req,res,next)=>{
    const schema=joi.object({
        name: joi.string().min(3).max(100).required(),
        email: joi.string().email().max(100).required(),
        password: joi.string().min(4).max(100).required(),
    })
    
    const{error}=schema.validate(req.body);
    if(error){
        return res.status(400).json({message:"bad request",error})
    }
    next();

}

const loginvalidation=(req,res,next)=>{
    const schema=joi.object({
      
        email:joi.string().email().max(100).required(),
        password:joi.string().min(4).max(100).required(),
    })
    const{error}=schema.validate(req.body);  
    if(error){
        return res.status(400).json({message:"bad request",error})
    }
    next();
    

}
module.exports={
    signupvalidation,
    loginvalidation
}



// {"name":"jyothi",
//     "email":"jyothi@example.com",
//    "password":"12345"
// }