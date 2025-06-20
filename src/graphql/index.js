import { mergeTypeDefs } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';

//category section
import CategorySchema from "./category/queries.js"
import CategoryResolvers from "./category/resolvers.js"


// product section
import ProductSchema from "./product/queries.js"
import ProductResolvers from "./product/resolvers.js"


//user section
import UserSchema from './user/queries.js';
import UserResolvers from './user/resolvers.js';


//cart section
import CartSchame from './cart/queries.js';
import CartResolvers from './cart/resolvers.js';

const typeDefs = mergeTypeDefs([CategorySchema, ProductSchema, UserSchema, CartSchame])
const resolvers = {
    Query: {
        ...CategoryResolvers.Query,
        ...ProductResolvers.Query,
        ...UserResolvers.Query,
        ...CartResolvers.Query
    },
    Mutation: {
        ...CategoryResolvers.Mutation,
        ...ProductResolvers.Mutation,
        ...UserResolvers.Mutation,
        ...CartResolvers.Mutation
    }
}

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;