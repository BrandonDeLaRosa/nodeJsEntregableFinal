const Users = require('../models/users.model');

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