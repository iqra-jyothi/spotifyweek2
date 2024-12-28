// const Usermodel = require("../Models/User");
// const bcrypt = require("bcryptjs");
// const jwt=require('jsonwebtoken')
// const signup=async(req,res)=>{
//     try{
//         const {name,email,password}=req.body;
//         const user=await Usermodel.findOne({email});
//         if(user)
//         {
//             return res.status(409).json({message:'user is already exist ,you can login',success:false});
//         }
//         const Usermodels=new Usermodel({name,email,password});
//         Usermodels.password=await bcrypt.hash(password,10);
//         await Usermodels.save();
//         res.status(201).json({
//             message:"signup succesfully",
//             success:true
//         })
//     }
//     catch(error)
//     {

//         res.status(500)
//         .json({message:"Internal server erroe",success:false})
//     }
// }



// const login=async(req,res)=>{

//     try{
//         const {email,password}=req.body;
//         const user=await Usermodel.findOne({email});
//         const errorMsg='Auth email or password is wrong'
//         if(!user)
//         {
//             return res.status(403).json({message:errorMsg,success:false});
//         }
//         const ispassEqual=await bcrypt.compare(password,user.password)
//         if(!ispassEqual)
//         {
//             return res.status(403).json({message:errorMsg,success:false}); 
//         }
//         const jwtToken=jwt.sign({email:user.email,_id:user._id},
//             process.env.JWT_SECRET,
//             {expiresIn:'24h'}
//         )

//         res.status(200).json({
//             message:"login succesfully",
//             success:true,
//             jwtToken,
//             email,
//             name:user.name
//         })
//     }
//     catch(error)
//     {

//         res.status(500)
//         .json({message:"Internal server erroe",success:false})
//     }
// }
// module.exports={
//     signup,
//     login
// }






const Usermodel = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await Usermodel.findOne({ email });
        if (user) {
            return res.status(409).json({ message: 'User already exists, you can login', success: false });
        }

        const Usermodels = new Usermodel({ name, email, password });
        Usermodels.password = await bcrypt.hash(password, 10);
        await Usermodels.save();
        
        res.status(201).json({
            message: "Signup successful",
            success: true
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", success: false });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Usermodel.findOne({ email });
        const errorMsg = 'Auth email or password is wrong';

        if (!user) {
            return res.status(403).json({ message: errorMsg, success: false });
        }

        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({ message: errorMsg, success: false });
        }

        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET, // Ensure JWT_SECRET is set in your .env file
            { expiresIn: '24h' }  // Set the expiration to 24 hours
        );

        res.status(200).json({
            message: "Login successful",
            success: true,
            jwtToken,
            email,
            name: user.name
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", success: false });
    }
};

module.exports = {
    signup,
    login
};

