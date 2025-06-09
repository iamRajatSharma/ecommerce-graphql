import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import conn from "./lib/database.js";
import ProductSchema from "./graphql/product/queries.js";
import ProductResolvers from "./graphql/product/resolvers.js";

import schema from "./graphql/index.js"

async function startApolloServer() {
    const server = new ApolloServer({
        schema
    })

    await startStandaloneServer(server, {
        listen: { port: process.env.PORT, path: `/${process.env.END_POINT}` }
    })
}

startApolloServer()
    .then((success) => {
        console.log(`Sever started on http://localhost:${process.env.PORT}/${process.env.END_POINT}`)
    })
    .catch((err) => {
        console.log(err)
    })