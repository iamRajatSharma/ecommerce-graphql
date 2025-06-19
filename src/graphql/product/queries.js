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
        productByCategory(categoryId: ID!): [Product]
    }

    type Mutation{
        deleteProduct(id: ID!): Boolean!
        addProduct(name: String, price: Int, descrption: String, availability: Boolean, category: ID): Product!
    }
`
export default ProductSchema