const CartSchame = `#graphql

    type CartItems{
        product: Product!
        quantity: Int
    }

    type Cart{
        id: ID!
        user: User!
        items: [CartItems]
    }

    type Query{
        getUserCart(userId: ID!): [Cart]!
    }

    type Mutation{
        addToCart(productId:ID!, quantity: Int!): Cart
    }

`

export default CartSchame