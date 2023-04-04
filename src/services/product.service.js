const Product = require('../models/products.model');
const Users = require('../models/users.model');
const {Op} = require('sequelize')

class productServices {

    static async getAll(){
        try {
            const getting = await Product.findAll({
                attributes: {exclude: ["createdAt","updatedAt"]},
            })
            return getting
        } catch (error) {
            throw(error)
        }
    }


    // static async getAllAvailableProducts(){
    //     try {
    //         const products = await Product.findAndCountAll({
    //             where:{
    //                 availableQty:  availableQty > 0 
    //             }
    //         })
    //         return products
    //     } catch (error) {
    //         throw(error)
    //     }
    // }


static async getAllAvailableProducts(){
        try {
            const products = await Product.findAll({
                attributes: {exclude: ["createdAt","updatedAt"]},
                include:[
                    {
                        model: Users,attributes:["username"]
                    }
                ],
                where: {
                    availableQty:{[Op.gt] : 0} 
                   
                }
            })
            return products
        } catch (error) {
            throw(error)
        }
    }



    static async createNewProduct(product){
        try {
            const creating = await Product.create(product)
            return creating

        } catch (error) {
            throw(error)
        }
    }

    static async updatingProduct(id, productInfo){
        try {
            const updating = await Product.update(productInfo, {
                where:{id}
            });
            return updating
        } catch (error) {
            throw(error)
        }
    }

    static async deleteThisProduct(id){
        try {
            const deleting = await Product.destroy({
                where:{id}
            });
            return deleting
        } catch (error) {
            throw(error)    
        }
    }
}

module.exports= productServices;

