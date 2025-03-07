const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: { type: String, required: true }, 
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone:{type:Number,required:true},
    adress:{type:String,required:true},
    cart :{type:Array,default:[]},
    role : { type: String, default: "user" },
    
}
)

module.exports = mongoose.model("users", userSchema);