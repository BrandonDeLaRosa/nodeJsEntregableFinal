const productServices = require('../services/product.service');

const getAllProducts = async (req,res,next) => {
    try {
        const products = await productServices.getAll();
        res.status(201).json(products);
    } catch (error) {
        next({
            status: 418,
            message: error.message,
            name: error.name
        })
    }
}

const getProducts = async (req,res,next) => {
    try {
        const products = await productServices.getAllAvailableProducts()
        res.status(201).json(products)
    } catch (error) {
        next({
            status: 418,
            message: error.message,
            name: error.name
        })
    }
}

const createProduct = async (req,res,next) => {
    try {
        const product = req.body;
        const result = await productServices.createNewProduct(product)
        res.status(201).json(result)
    } catch (error) {
        next({
            status: 418,
            message: error.message,
            name: error.name
        })
    }
}

const updateProduct = async (req,res,next) => {
    try {
        const {id} = req.params;
        const productInfo = req.body;
        await productServices.updatingProduct(id, productInfo)
        res.status(204).send();
    } catch (error) {
        next({
            status: 418,
            message: error.message,
            name: error.name
        })
    }
}

const deleteProduct = async (req,res,next) => {
    try {
        const {id} = req.params;
        await productServices.deleteThisProduct(id)
        res.status(204).send();
    } catch (error) {
        next({
            status: 418,
            message: error.message,
            name: error.name
        })
    }
}

module.exports = {
    createProduct,
    updateProduct,
    getAllProducts,
    deleteProduct,
    getProducts
}