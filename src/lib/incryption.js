import bcrypt from "bcrypt"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"

dotenv.config()

export async function hashedPassword(password) {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hashSync(password, salt)
}

export async function comparePassword(userPassword, DBPassword) {
    return await bcrypt.compare(userPassword, DBPassword)
}

export async function generateToken(id) {
    console.log(id)
    return jwt.sign({ userId: id }, process.env.JWT_SECRET)
}