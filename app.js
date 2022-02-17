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

app.use("/", router);

app.use("/addProduct", router);

app.use("/sellItem", router);

app.use("/products", router);
app.use("/editProduct/:productId", router);
app.use("/deleteProduct/:productId", router);

app.use("/addDealer", router);
app.use("/allDealers", router);

app.use("/purchaseProduct",router);
app.use("showStock",router);

app.use("sellItem",router);

app.listen(port, ()=>{
    console.log(`listening to port number ${port}`);
});