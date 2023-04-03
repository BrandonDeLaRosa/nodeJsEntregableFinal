const {
    ValidationError,
    DatabaseError,
    // BaseError,
    ConnectionError,
    ConnectionAcquireTimeoutError,    
    ConnectionRefusedError,
    ConnectionTimedOutError,
    InvalidConnectionError,
} = require('sequelize');


const logError = (error,req,res,next) => {
    console.log(error);
    next(error)
};

//TODO Manejador de errores general.
const errorHandler = (error,req,res,next) => {
    let { status } = error;
    return res.status(status || 500).json({
        message: error.message,
        errorName: error.name
    })
};

const ormErrorHandler = (error, req, res , next) => {
    if(
        error instanceof ConnectionError ||
        error instanceof ConnectionAcquireTimeoutError ||
        error instanceof ConnectionRefusedError ||
        error instanceof ConnectionTimedOutError ||
        error instanceof InvalidConnectionError 

    ) {
        return res.status(409).json({   
            name: error.name,
            message: "Database error conection error"
        })
    }

    if(
        error instanceof ValidationError  
    ) {
        return res.status(409).json({
            name : error.name,
            message: error.message,
            error: error.errors
        })
    }
    if(
        error instanceof DatabaseError 
        // error instanceof BaseError
    ) {
        return res.status(409).json({
            name : error.name,
            message: error.message,
            error: error.errors,
            params: error['parameters']
        })
    }

    next(error) 
};

module.exports = {
    logError,
    errorHandler,
    ormErrorHandler
}