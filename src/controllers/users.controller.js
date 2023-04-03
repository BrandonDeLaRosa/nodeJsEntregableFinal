const userServices = require ('../services/users.service');

const getAllUsers = async (req,res,next) => {
    try {
        const users = await userServices.getAll()
        res.status(201).json(users)
    } catch (error) {
        next({
            name: error.name,
            message: error.message
        })
    }
}



const createUser = async (req,res,next) => {
    try {
        const newUser = req.body;
        const result = await userServices.createNewUser(newUser);
        res.status(201).json(result)
    } catch (error) {
        next({
            name: error.name,
            message: error.message
        })
    }
}

const updateUser = async (req,res,next) => {
    try {
        const { id } = req.params;
        const userInfo = req.body;
        await userServices.updateUserData(id,userInfo)
        res.status(204).send()
    } catch (error) {
        next({
            name: error.name,
            message: error.message
        })
    }
}
const getUsersOrders = async (req,res,next) => {
    try {
        const { id } = req.params;
       const userInfo = await userServices.userOrders(id)
        res.status(201).json(userInfo)
    } catch (error) {
        next({
            name: error.name,
            message: error.message
        })
    }
}

const deleteUser = async  (req,res,next) => {
    try {
        const { id } = req.params;
        await userServices.deleteOneUser(id)
        res.status(204).send()
    } catch (error) {
        next({
            name: error.name,
            message: error.message
        })
        
    }
}

module.exports= {
    createUser,
    updateUser,
    getAllUsers,
    deleteUser,
    getUsersOrders
}