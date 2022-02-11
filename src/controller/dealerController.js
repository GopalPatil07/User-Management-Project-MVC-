//function to add dealer
const addDealer = async (req, res) => {
    await res.render('addDealer');
};

const saveDealer = async(req, res) => {
    const {name, gstNumber, phoneNumber, email, address} = await req.body;
    Dealer.create({
        name : name , gstNumber : gstNumber , phoneNumber : phoneNumber , email : email , address : address
    }).catch(error => console.log(error));
    await res.render('home');
}