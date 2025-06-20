import CartService from "../../services/cart/index.js";

const CartResolvers = {
    Query: {
        categories: async (user) => {
            return await CartService.getUserCart(user)
        },
    },
    Mutation: {
        addToCart: async (_, { input }, { user }) => {
            console.log(input)
            console.log(user)
            return await "Welcome"
            // return await CartService.createCart(id, quantity)
        }
    }
}

export default CartResolvers