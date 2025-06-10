import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    id: String,
    name: {
        type: String,
        required: true,
        unique: true
    }
})

const CategoryModel = mongoose.model("Category", CategorySchema)
export default CategoryModel