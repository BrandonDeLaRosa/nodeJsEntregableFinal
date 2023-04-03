const ProductsInCart = require('../models/productInCart.model');

class productInCartServices {

    static async getAll(){
        try {
            const result = await ProductsInCart.findAll()
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports= productInCartServices