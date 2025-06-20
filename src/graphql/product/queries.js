const ProductSchema = `#graphql
    type Product{
        _id: ID!
        name: String!
        price: String!
        descrption: String!
        availability: Boolean
        category: Category!
    }

    type Query{
        products: [Product!]!
        product(id: ID!): Product
        productByCategory(categoryId: ID!): [Product] # not use for now
    }

    type Mutation{
        deleteProduct(id: ID!): String!
        addProduct(name: String, price: Int, descrption: String, availability: Boolean, category: ID): Product!
        updateProduct(id:ID, name: String, price: Int, descrption: String, availability: Boolean, category: ID): String!
    }
`
export default ProductSchema