const express = require('express');
const isauth = require('../middleware/isauth');
const { createOrder, GetOrders } = require('../controler/orders');
const orderRouter=express.Router()


orderRouter.post("/create",isauth,createOrder)
orderRouter.get("/getall",GetOrders)

module.exports=orderRouter;