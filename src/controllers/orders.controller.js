const orderServices = require ('../services/orders.services')


const createOrder = async (req,res,next) => {
    try {
        const order = req.body;
        const result = await orderServices.create(order)
        res.status(201).json(result)
    } catch (error) {
        next(error)
    }
};

const getOrders = async (req,res,next) => {
    try {
        const orders = await orderServices.allOrders()
        res.status(201).json(orders)
    } catch (error) {
        next(error)
    }
}

const deleteOrders = async(req,res,next) => {
    try {
        const {id} = req.params;
        await orderServices.deleted(id)
        res.status(204).send()
    } catch (error) {
        next()
    }
}

module.exports = {
    createOrder,
    getOrders,
    deleteOrders
}