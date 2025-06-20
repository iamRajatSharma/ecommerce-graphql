import CartModel from "../../schema/Cart.js"

class CartService {

    static async createCart(id, quantity) {
        let cart = await CartModel.findOne({ _id: id })
        console.log(cart)
        if (!cart) {
            // cart = new CartModel({
            //     user: 
            // })
        }
    }

    static async getUserCart(user) {
        try {
            return await CartModel.findOne({ user: user })
        }
        catch (err) {
            return err
        }
    }

}

export default CartService