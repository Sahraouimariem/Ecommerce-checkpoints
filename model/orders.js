const mongoose = require('mongoose');
const orderSchema=new mongoose.Schema({
    customer:{type:String},
    phone:String,
    status:{type:String,default:"pending"}, 
    userID:{type: mongoose.Schema.Types.ObjectId,ref:'users'},
    cart:{type: Array},
    total:Number
},{timestamps:true})
module.exports=mongoose.model('orders',orderSchema);