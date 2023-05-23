const User= require("../models/user.model")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const express = require('express')
const router = express.Router()
const auth = require("../middleware/UserMiddleware")


router.route("/").post(auth)


module.exports = router;