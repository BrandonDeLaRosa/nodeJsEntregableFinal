const Orders = require('../models/order.model');

class orderServices {

    static async create(order){
        try {
            const newOrder = await Orders.create(order);
            return newOrder
        } catch (error) {
            throw error
        }
    }

    static async allOrders(){
        try {
            const orders = await Orders.findAll();
            return orders
        } catch (error) {
            throw error
        }
    }

    static async deleted(id){
       
        try {
            const deleting = await Orders.destroy({
                where: {id}
            });
            return deleting
        } catch (error) {
            throw error
        }
    }
}

module.exports = orderServices