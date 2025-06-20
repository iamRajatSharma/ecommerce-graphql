const UserSchema = `#graphql
    type User{
        _id: ID!
        name: String!
        email: String!
        password: String!
        role: String!
    }

    type Query{
        users: [User!]!
        user(id: ID!): User
        # login(email: String, password: String): User!
    }

    type Mutation{
        addUser(name: String, email: String, password: String, role: String): User!
        deleteUser(id: ID!): String!
    }
`
export default UserSchema