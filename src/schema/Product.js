import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    id: String,
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    descrption: {
        type: String,
        required: true
    },
    availability: {
        type: Boolean,
        required: true,
        default: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
})

const ProductModel = mongoose.model("Product", ProductSchema)
export default ProductModel