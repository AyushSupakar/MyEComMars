const { Schema, models, model } = require("mongoose");

const ProductSchema = new Schema({
    prdname : {type:String , required: true},
    desc : {type:String , required: true},
    price : {type:String , required: true},
    imgurl : {type:String}
})

export const Product = models.Product || model('Product', ProductSchema);