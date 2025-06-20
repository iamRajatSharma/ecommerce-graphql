const CategorySchema = `#graphql
    type Category{
        _id: ID!
        name: String!
    }

    type Query{
        categories: [Category!]!
        category(id: ID!): Category
    }

    type Mutation{
        deleteCategory(id: ID!): Category!
        addCategory(name: String): Category!
        updateCategory(id: ID!, name: String!): String!
    }
`
export default CategorySchema