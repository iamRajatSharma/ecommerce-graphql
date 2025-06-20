import CategoryModel from "../../schema/Category.js"

class CategoryService {
    static async getAllCategories() {
        return await CategoryModel.find()
    }

    static async getCategoryById(id) {
        try {
            return await CategoryModel.findById({ _id: id })
        }
        catch (error) {
            return error
        }
    }

    static async deleteCategory(id) {
        try {
            const res = await CategoryModel.findByIdAndDelete({ _id: id })
            return res
        }
        catch (err) {
            return err
        }
    }

    static async createCategory(name) {
        try {
            return await CategoryModel.create({ name: name })
        }
        catch (err) {
            return err
        }
    }

    static async updateCategory(id, name) {
        try {
            const cat = await CategoryModel.findById(id)
            if (!cat) {
                return "No category Found"
            }

            cat.name = name
            await cat.save();
            return "Category Updated successfully"
        }
        catch (err) {
            returnerr
        }
    }

}


export default CategoryService