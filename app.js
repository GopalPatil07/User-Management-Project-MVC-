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

<<<<<<< HEAD
app.get("/", router);
app.get("/addProduct", router);
app.post("/addProduct", router);
app.get("/addDealer", router);
app.get("/sellItem", router);
app.get("/products", router);
app.get("/editProduct/:productId", router);
app.get("updateProduct/:productId", router);
=======
//url for the Product tab
app.use("/", router);
app.use("/addProduct", router);
app.use("/editProduct/:productId", router);
app.use("updateProduct/:productId", router);
app.use("/products", router);

//url for the addDealer
app.use("/addDealer", router);

//url for the sellProduct
app.use("/sellItem", router);

//url for purchaseProduct
app.use("/purchaseProduct", router);
app.use("/stock", router)

>>>>>>> 8d6e143074e72cad1978b9acae9e12480f016003
app.listen(port, ()=>{
    console.log(`listening to port number ${port}`);
});