
const { logError } = require('../middlewares/errorhandler.middleware');

const errorHandlerRouter = (app) => {   //! ESTE PARAMETRO HACE REFERENCIA A LAINSTANCIA DE EXPRESS.
    app.use(logError);

    app.use((error,req,res,next) => {
        res.status(400).json(error);
    })
}

module.exports = errorHandlerRouter

