const Cart = require('../models/cart.model');

class cartServices {

    static async create(body){
        try {
            const cart = await Cart.create(body);
            return cart

        } catch (error) {
            throw error
        }
    }

    static async getAll(){
        try {
            const result = await Cart.findAll();
            return result
        } catch (error) {
            throw error
        }
    }

}

module.exports = cartServices;