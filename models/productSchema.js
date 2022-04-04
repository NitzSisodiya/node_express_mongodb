const mongoose = require("mongoose");



const productSchema = mongoose.Schema({
  
    productName:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
        default:0
    }
});

const product = mongoose.model("Product", productSchema);

module.exports = product;