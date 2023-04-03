const ProductsInCart = require('../models/productInCart.model');
const Cart = require('../models/cart.model');
const productInCartServices = require('../services/productsIncart.service');

const addProducts = async (req,res,next) => {
    try {
        const { cartId, productId, quantity, price, status} = req.body;
        await ProductsInCart.create({cartId, productId, quantity, price, status})
        const totalPrice = price * quantity
        await Cart.increment({totalPrice},{ where: {id: cartId}})
        res.json({
            message: 'Producto agregado satisfactoriamente.'
        })
    } catch (error) {
        next (error)
    }
}

const getAllProducts = async (req,res,next) => {
    try {
        const allProducts = await productInCartServices.getAll()
        res.status(201).json(allProducts)
    } catch (error) {
        console.log(error);
        next(error)
    }
}

module.exports={
    addProducts,
    getAllProducts
}