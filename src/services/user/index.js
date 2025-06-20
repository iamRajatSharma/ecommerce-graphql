import { hashedPassword, comparePassword, generateToken } from "../../lib/incryption.js"
import UserModel from "../../schema/User.js"
class UserService {

    static async getAllUsers() {
        return await UserModel.find()
    }

    static async getUserById(id) {
        try {
            return await UserModel.findById({ _id: id })
        }
        catch (err) {
            return err
        }
    }

    static async deleteUser(id) {
        try {
            const res = await UserModel.deleteOne({ _id: id })
            return "User deleted successfully"
        }
        catch (err) {
            return err
        }
    }

    static async createUser(name, email, password, role) {
        try {
            const hashedPass = await hashedPassword(password)
            let res = await UserModel.create({ name, email, password: hashedPass, role })
            return res
        }
        catch (err) {
            return err;
        }
    }

    static async loginUser(email, password) {
        try {
            let user = await UserModel.findOne({ email: email })
            if (!user) {
                return "User credenitals not found"
            }

            const hashedPass = await comparePassword(password, user.password)
            if (!hashedPass) {
                return "User credenitals not matched"
            }
            console.log(user)
            const token = generateToken(user)
            return { user, token: token }
        }
        catch (err) {
            return err;
        }
    }



}

export default UserService