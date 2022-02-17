const Dealer = require ('../models/dealer')
//function to render dealer adding web page
const addDealer = async (req, res) => {
    await res.render('addDealer');
};

//function to add dealer to database
const saveDealer = async(req, res) => {
    const {dealerName, gstNumber, phoneNumber, email, address} = await req.body;
    Dealer.create({
        dealerName : dealerName , gstNumber : gstNumber , phoneNumber : phoneNumber , email : email , address : address
    }).catch(error => console.log(error));
    await res.render('home');
}

const allDealers = async(req , res)=>{
    const dealers = await Dealer.findAll({
        raw : true
    }).catch(error=>console.log(error))
    await res.render("allDealers" , {dealers})
}
module.exports= {
    addDealer, saveDealer, allDealers
}