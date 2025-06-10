import mongoose, { mongo } from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['ADMIN', 'USER'],
        required: true,
        default: 'USER'
    }
}, {
    timestamps: true
})

const UserModel = mongoose.model("User", UserSchema)

export default UserModel