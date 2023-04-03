const db = require('../utils/database');
const Products = require('../models/products.model');
const initModels = require('../models/initModels')

const products = [
    {
        name: "Ipad",
        description: "Modelo 2020",
        price: 1000,
        availableQty: 10,
        status: true,
        img: "https://m.media-amazon.com/images/I/81qK4+EC+cL._AC_SL1500_.jpg" ,
        userId:1
    },

    {
        name: "iphone",
        description: "iphone 14",
        price: 1800,
        availableQty: 20,
        status: true,
        img: "https://m.media-amazon.com/images/I/41al5-lNvML._AC_SX522_.jpg",
        userId:1
    }
]

db.sync({force: true})
.then(
 async() => {
   const defaultProducts = await Products.bulkCreate(products)
   if (defaultProducts) console.log(`productos por defecto agregados exitosamente`);
}
)