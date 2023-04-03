const Users = require('../models/users.model');
const Orders = require('../models/order.model');
const ProductsInCart = require('../models/productInCart.model');
const Cart = require('../models/cart.model');
const Products = require ('../models/products.model')


class userServices {

    static async getUserAuth(username){
        try {
            const user = await Users.findOne({
                where: {username}
            })
            return user
        } catch (error) {
            throw(error)
        }
    }

    static async getAll(){
        try {
            const users = await Users.findAll()
            return users
        } catch (error) {
            throw(error)
        }
    }
    
    static async createNewUser(newUser){
        console.log(newUser);
        try {
            const userCreated = await Users.create(newUser);
            return userCreated
        } catch (error) {
            throw(error)
        }
    }

    static async userProducts(id){
        try {
            const result = await Users.findByPk(id,{
                attributes: {exclude: ["id","email","password"]},
                include:[
                    {
                        model: Cart,attributes:{exclude: ["userId", "createdAt","updatedAt"]},
                        include:[
                            {
                                model: ProductsInCart, attributes: {exclude:["cartId","productId","quantity","price","status","createdAt","updatedAt"]},
                                include:[
                                    {
                                        model: Products
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });
            return result
        } catch (error) {
            throw(error)
        }
    }

    static async userOrders(id){
        try {
            const result = await Users.findByPk(id,{
                attributes: {exclude: ["id","email","password"]},
                include:[
                    {
                        model: Orders, attributes:{exclude:["userId","createdAt","updatedAt"]}
                    }
                ]
            });
            return result
        } catch (error) {
            throw(error)
        }
    }
    static async updateUserData(id, userInfo){
        try {
            const updateUser = await Users.update(userInfo, {
                where:{id}
            });
            return updateUser
        } catch (error) {
            throw(error)
        }
    }

    static async deleteOneUser(id){
        try {
            const deleting = await Users.destroy({
                where:{id}
            })
        } catch (error) {
            
        }
    }
}



module.exports = userServices;