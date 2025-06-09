import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    id: String,
    name: String
})

const CategoryModel = mongoose.model("Category", CategorySchema)
export default CategoryModel