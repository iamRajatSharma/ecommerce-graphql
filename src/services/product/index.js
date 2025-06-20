import ProductModel from "../../schema/Product.js"

class ProductService {
    static async getAllProduct() {
        return await ProductModel.find()
    }

    static async getProductById(id) {
        try {
            return await ProductModel.findById({ _id: id })
        }
        catch (err) {
            return err
        }
    }

    static async deleteProduct(id) {
        try {
            const res = await ProductModel.findOneAndDelete({ _id: id })
            return "Product deleted successfully"
        }
        catch (err) {
            return err
        }
    }

    static async createProduct(name, price, descrption, availability, category) {
        try {
            return await ProductModel.create({ name, price, descrption, availability, category })
        }
        catch (err) {
            return err;
        }
    }

    static async updateProduct(id, name, price, descrption, availability, category) {
        try {
            const result = await ProductModel.updateOne({ _id: id }, { name, price, descrption, availability, category })
            console.log(result)
            return "Product details updated"
        }
        catch (err) {
            return err;
        }
    }

}


export default ProductService