const User= require("../models/user.model")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

async function Login(req, res){
    const user = await User.findOne({
        email: req.body.email,
    })
    const isPasswordValid = await bcrypt.compare(req.body.password,user.password)
    if(isPasswordValid){
        const token = jwt.sign({
            name: user.name,
            email: user.email
        },"Nagasai123")
        return res.send({status:"OK!", user:token})
    }
    else{
        return res.send({status:"Email not found!", user:false})
    }
}


// async function UserMiddleware(){
//     Login= async (req,res,next)=>{
//             const user = await User.findOne({
//                 email: req.body.email,
//             })
//             const isPasswordValid = await bcrypt.compare(req.body.password,user.password)
//             if(isPasswordValid){
//                 const token = jwt.sign({
//                     name: user.name,
//                     email: user.email
//                 },"Nagasai123")
//                 return res.send({status:"OK!", user:token})
//             }
//             else{
//                 return res.send({status:"Email not found!", user:false})
//             }
//             next()
//         }

// }


module.exports = Login