
const orders=require('../model/orders')

const createOrder=async(req,res)=>{
    try {
        const neworder=new orders({...req.body,userID:req.user._id})
        await neworder.save()
        res.status(201).json({message:"Order created successfully",neworder})

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const GetOrders=async(req,res)=>{
    try {
        const allorders=await orders.find().populate("userID")
        res.status(200).send({ msg: 'Orders fetched successfully', orders:allorders,});
    } catch (error) {
        res.status(500).send({ msg: 'Error fetching Orders', error });
    }
};








module.exports={createOrder,GetOrders}