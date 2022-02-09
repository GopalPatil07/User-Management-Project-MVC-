const express = require('express');
const exphbs = require('express-handlebars')
const app = express();
const router = require('./src/routes/index');
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.engine('hbs' , exphbs.engine({extname: 'hbs'}));
app.set("view engine" , 'hbs');

app.get("/", router);
app.get("/addProduct", router);
app.post("/addProduct", router);
app.get("/addDealer", router);
app.get("/sellItem", router);
app.get("/products", router);
<<<<<<< HEAD
app.get("/purchaseProduct", router);
app.post("/purchaseProduct", router);
=======
<<<<<<< HEAD
app.get("/editProduct/:productId", router);
app.get("updateProduct/:productId", router);
=======
app.get("/purchaseProduct", router)
>>>>>>> 059fc8eb4739dca60f4cfb4bbfba8d62cf356180
>>>>>>> 09fb85489499f1d0506327d1f7dc068cd7a2d50c
app.listen(port, ()=>{
    console.log(`listening to port number ${port}`);
});