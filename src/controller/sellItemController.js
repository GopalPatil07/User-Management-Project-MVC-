const Customer = require("../models/customer");
const Orders = require("../models/orders")

const sellItem = async (req, res)=>{
      const {customerName, customerVehicleNumber, phoneNumber, address, orderNo, partNumber, 
         quantity, cgst, sgst, amount, total} = await req.body;
      Customer.create({
         customerName: customerName, customerVehicleNumber : customerVehicleNumber, phoneNumber: phoneNumber,
         address : address
      }).catch(error => console.log(error))
      Orders.create({
         orderNo : orderNo, partNumber : partNumber,quantity : quantity, cgst :cgst, 
         sgst: sgst, amount : amount, total : total
      }).catch(error => console.log(error))
}
