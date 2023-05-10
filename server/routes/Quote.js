const User= require("../models/user.model")
const jwt = require('jsonwebtoken')
const express = require("express")
const router = express.Router()

router.get("/",async (req,res)=>{
    const token = req.headers['x-access-token']
    try{
        const decoded = jwt.verify(token,'Nagasai123')
        const email = decoded.email
        const user = await User.findOne({email:email})

        res.send({status:"ok", quote:user.quote})
    }
    catch(error){
        console.log(error)
        res.send({status:"error",error:"Invalid token"})
    }
})

router.post("/", async (req,res)=>{
    const token = req.headers['x-access-token']
    try{
        const decoded = jwt.verify(token,"Nagasai123")
        const email = decoded.email
        const user = await User.updateOne(
            {email:email},
            {$set: {quote:req.body.quote}})
        res.send({status:"ok"})
        }
        catch(error){
            res.send({status:"error",error:"Invalid token"})
        }    
})

module.exports = router