//function to render dealer adding web page
const addDealer = async (req, res) => {
    await res.render('addDealer');
};

//function to add dealer to database
const saveDealer = async(req, res) => {
    const {name, gstNumber, phoneNumber, email, address} = await req.body;
    Dealer.create({
        name : name , gstNumber : gstNumber , phoneNumber : phoneNumber , email : email , address : address
    }).catch(error => console.log(error));
    await res.render('home');
}
module.exports= {
    addDealer, saveDealer
}