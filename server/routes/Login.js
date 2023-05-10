const User= require("../models/user.model")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const express = require('express')
const router = express.Router()

router.post("/", async (req,res)=>{
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
})


module.exports = router;