const { validationResult } = require("express-validator")

const  validateResult = (req,res,next) => {
    try {
        validationResult(req).throw()
        return next();
    } catch (error) {
        // res.status(400).json({errors: error.array().map((error) => error.msg)})
        next({
            status:400,    //! <-- Todos los errorees de validacion son 400.
            message: "Validation error",
            name: error.array().map((error) => error.msg),
        })
    }
 }

 module.exports= validateResult; 