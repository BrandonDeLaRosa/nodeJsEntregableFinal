const express = require('express');
const cors = require ('cors');
const morgan = require ('morgan');
const db = require('./utils/database');
const initModels = require('./models/initModels');
const authRoute = require('./routes/auth.routes')
const usersRoutes = require('./routes/users.routes');
const productsRoutes = require('./routes/products.routes');
const ordersRoutes = require ('./routes/orders.routes')
const cartRoutes = require ('./routes/cart.routes');
const productsInOrder = require ('./models/productsInOrder.model');
const ProductsInCart = require ('./models/productInCart.model');
const errorHandlerRouter = require('./routes/errorhandler.route');


initModels();
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

db.authenticate()
.then(() => {
    console.log('Base de datos autenticada :)');
})

.catch((error) => {
    console.log(error);
});

db.sync()
// db.sync({force:true})

.then(() => {
    console.log('Base de datos sincronizada :)');
})
.catch((error) =>{
    console.log(error);
});

const PORT = 8000;

app.use(usersRoutes);
app.use(productsRoutes);
app.use(authRoute);
app.use(ordersRoutes);
app.use(cartRoutes);

app.get('/', (req,res) =>{
    res.send('Welcome to my api')
});

errorHandlerRouter(app);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});