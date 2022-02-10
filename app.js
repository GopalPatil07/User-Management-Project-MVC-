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

app.listen(port, ()=>{
    console.log(`listening to port number ${port}`);
});