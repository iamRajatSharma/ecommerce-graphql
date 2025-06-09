import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    id: String,
    name: String,
    price: Number,
    descrption: String,
    availability: Boolean
})

const ProductModel = mongoose.model("Product", ProductSchema)
export default ProductModel