import ProductService from "../../services/product/index.js";

const ProductResolvers = {
    Query: {
        products: async () => {
            return await ProductService.getAllProduct();
        },
        product: async (_, { id }) => {
            return await ProductService.getProductById(id)
        }
    },
    Mutation: {
        deleteProduct: async (_, { id }) => {
            return await ProductService.deleteProduct(id)
        },
        addProduct: async (_, { name, price, descrption, availability, category }) => {
            return await ProductService.createProduct(name, price, descrption, availability, category)
        }
    }
}

export default ProductResolvers