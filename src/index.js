import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import conn from "./lib/database.js";
import CategorySchema from "./graphql/category/queries.js";
import CategoryResolvers from "./graphql/category/resolvers.js";

async function startApolloServer() {
    const server = new ApolloServer({
        typeDefs: CategorySchema,
        resolvers: CategoryResolvers
    })

    await startStandaloneServer(server, {
        listen: { port: 3000, path: "/graphql" }
    })
}

startApolloServer()
    .then((success) => {
        console.log('Sever started')
    })
    .catch((err) => {
        console.log(err)
    })