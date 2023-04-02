const userServices = require("../services/users.service");
const authServices = require('../services/auth.service')
const bcrypt = require('bcrypt');

const userLoging = async (req, res, next) => {
    try {
        const {username, password} = req.body;
        const user = await userServices.getUserAuth(username);
        if(!user){
            return next({
                status: 400,
                message: "invalid username",
                name: "user not found"
            })
        }

        const isValid = await bcrypt.compare(password,user.password)

        if(!isValid){
            return next({
                status: 400,
                message: "invalid password",
                name: "Invalid password"
            })
        }
        const { id,email } = user

        const token = authServices.genToken({id,email})

        res.json({
            id, username, email, token
        })

    } catch (error) {
        res.status(400).json(error);
    }
}
module.exports= {
    userLoging
}