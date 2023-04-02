const cart = require("./cart.model")
const Order = require("./order.model")
const ProductsInCart = require("./productInCart.model")
const productInOrder = require("./productsInOrder.model")
const products = require("./products.model")
const Users = require("./users.model")



const initModels = () => {

    Users.hasMany(Order, { foreignKey:"userId"})
    Order.belongsTo(Users,{ foreignKey: "userId"})

    Users.hasMany(products, {foreignKey: "userId"})
    products.belongsTo(Users, { foreignKey:"userId"})

    Users.hasOne(cart, {foreignKey:"userId"})
    cart.belongsTo(Users, {foreignKey:"userId"})


// ! LLaves Foraneas
    
    products.hasMany(ProductsInCart, { foreignKey:"productId"})
    ProductsInCart.belongsTo(products, {foreignKey:"productId"})
    
    cart.hasMany(ProductsInCart, { foreignKey:"cartId"})
    ProductsInCart.belongsTo(cart, {foreignKey:"cartId"})


    Order.hasMany(productInOrder,{foreignKey:"orderId"})
    productInOrder.belongsTo(Order, {foreignKey: "orderId"})

    products.hasMany(productInOrder, {foreignKey:"productId"})
    productInOrder.belongsTo(products, {foreignKey:"productId"})

}

module.exports = initModels;