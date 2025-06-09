import { mergeTypeDefs } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';

import CategorySchema from "./category/queries.js"
import CategoryResolvers from "./category/resolvers.js"

import ProductSchema from "./product/queries.js"
import ProductResolvers from "./product/resolvers.js"

const typeDefs = mergeTypeDefs([CategorySchema, ProductSchema])
const resolvers = {
    Query: {
        ...CategoryResolvers.Query,
        ...ProductResolvers.Query
    },
    Mutation: {
        ...CategoryResolvers.Mutation,
        ...ProductResolvers.Mutation
    }
}

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;