const cartServices = require('../services/cart.services');

const createCart = async (req,res,next) => {
    try {
        const body = req.body;
        const cart = await cartServices.create(body);
        res.status(201).json(cart)
    } catch (error) {
        next(error)
    }
}

const getAllCartProducts = async (req,res,next) => {
    try {
        const allProducts = await cartServices.getAll();
        res.status(201).json(allProducts)
    } catch (error) {
        next()
    }
}

module.exports= {
    createCart,
    getAllCartProducts
}