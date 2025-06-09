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
        deleteCategory(id: ID!): Boolean!
        addCategory(name: String): Category
    }
`
export default CategorySchema