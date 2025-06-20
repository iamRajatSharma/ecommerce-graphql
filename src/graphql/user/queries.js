const UserSchema = `#graphql
    type User{
        _id: ID!
        name: String!
        email: String!
        password: String!
        role: String!
    }

    type LoginOutput{
        token: String!
        user: User!
    }

    type Query{
        users: [User!]!
        user(id: ID!): User
    }

    type Mutation{
        addUser(name: String, email: String, password: String, role: String): User!
        deleteUser(id: ID!): String!
        login(email: String, password: String): LoginOutput!
    }
`
export default UserSchema