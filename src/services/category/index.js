import CategoryModel from "../../schema/Category.js"

class CategoryService {
    static async getAllCategories() {
        return await CategoryModel.find()
    }

    static async getCategoryById(id) {
        return await CategoryModel.findById(id)
    }

    static async deleteCategory(id) {
        const res =  await CategoryModel.deleteOne({ id })
        console.log(res)
        return true
    }

    static async createCategory(name) {
        return await CategoryModel.create({ name: name })
    }

}


export default CategoryService