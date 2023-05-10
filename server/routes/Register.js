const User= require("../models/user.model")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const express = require('express')
const router = express.Router()

router.post("/",async (req,res)=>{
    try{
        const newPass  = await bcrypt.hash(req.body.password,10)
        await User.create({
           name:req.body.name,
           email:req.body.email,
           password: newPass,
        })
        res.send({status:"Registered"})
    }
    catch(err){
        console.log(err)
        res.send({status:"error",error:"Duplicate email"})
    }
})

module.exports = router