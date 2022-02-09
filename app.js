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
app.get("/purchaseProduct", router);
app.post("/purchaseProduct", router);
app.listen(port, ()=>{
    console.log(`listening to port number ${port}`);
});