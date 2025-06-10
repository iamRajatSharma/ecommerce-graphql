import ProductModel from "../../schema/Product.js"

class ProductService {
    static async getAllProduct() {
        return await ProductModel.find()
    }

    static async getProductById(id) {
        return await ProductModel.findById({ _id: id })
    }

    static async deleteProduct(id) {
        const res = await ProductModel.deleteOne({ _id: id })
        return true
    }

    static async createProduct(name, price, descrption, availability, category) {
        console.log(category)
        try {
            return await ProductModel.create({ name, price, descrption, availability, category })
        }
        catch (err) {
            return err;
        }
    }

}


export default ProductService