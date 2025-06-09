import CategoryService from "../../services/category/index.js";

const CategoryResolvers = {
    Query: {
        categories: async () => {
            return await CategoryService.getAllCategories()
        },
        category: async (_, { id }) => {
            return await CategoryService.getCategoryById(id)
        }
    },
    Mutation: {
        deleteCategory: async (_, { id }) => {
            console.log(id)
            return await CategoryService.deleteCategory(id)
        },
        addCategory: async (_, { name }) => {
            return await CategoryService.createCategory(name)
        }
    }
}

export default CategoryResolvers