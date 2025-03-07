const mongoose = require('mongoose');
const config = async()=>{
    try{
        await mongoose.connect("mongodb+srv://sahraoui:lEUcKmLXaxuU3WtN@cluster0.khhht.mongodb.net/Lawahedh?retryWrites=true&w=majority&appName=Cluster0")
        console.log('Connected to MongoDB');
    }catch(error){
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = config;