import mongoose from "mongoose";

const conn = mongoose.connect("mongodb+srv://rajat:12345@cluster0.6wrjo.mongodb.net/ecommerce-graphql?retryWrites=true&w=majority&appName=cluster0")

conn
    .then((success) => {
        console.log('DB Connected')
    })
    .catch((err) => {
        console.log('DB Error')
    })

export default conn;