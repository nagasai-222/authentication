const express = require('express')
const app = express()
const cors = require('cors')
const User= require("./models/user.model")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const loginRouter = require('./routes/Login')
const registerRouter = require("./routes/Register")
const quoteRouter = require("./routes/Quote")

//Middleware
app.use(cors())
app.use(express.json()) //To convert request data to json

//Database Connection
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://admin:admin123@cluster0.lww9x9y.mongodb.net/test")

app.use("/api/quote", quoteRouter)
app.use("/api/register",registerRouter)
app.use("/api/login",loginRouter)

app.listen(5000,()=>{
    console.log("Server started on port 50000....")
})