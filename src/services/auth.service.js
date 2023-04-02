const jwt = require('jsonwebtoken')

class authServices {

    static genToken(payload) {  //REcibe informacion a firmar
        try {
            const token = jwt.sign(payload, "brandon",{
                algorithm:"HS512",
                expiresIn: "1d"
            });
            return token
        } catch (error) {
            throw(error);
        }
    }
}

module.exports = authServices;