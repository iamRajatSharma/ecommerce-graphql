const ProductSchema = `#graphql
    type Product{
        _id: ID!
        name: String!
        price: String!
        descrption: String!
        availability: Boolean!
    }

    type Query{
        products: [Product!]!
        product(id: ID!): Product
    }

    type Mutation{
        deleteProduct(id: ID!): Boolean!
        addProduct(name: String, price: Int, descrption: String, availability: Boolean): Product
    }
`
export default ProductSchema