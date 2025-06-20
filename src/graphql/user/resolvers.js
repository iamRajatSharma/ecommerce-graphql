import UserService from "../../services/user/index.js";

const UserResolvers = {
    Query: {
        users: async () => {
            return await UserService.getAllUsers();
        },
        user: async (_, { id }) => {
            return await UserService.getUserById(id)
        },
    },
    Mutation: {
        addUser: async (_, { name, email, password, role }) => {
            return await UserService.createUser(name, email, password, role)
        },
        deleteUser: async (_, { id }) => {
            return await UserService.deleteUser(id)
        },
        login: async (_, { email, password }) => {
            return await UserService.loginUser(email, password)
        }
    }
}

export default UserResolvers