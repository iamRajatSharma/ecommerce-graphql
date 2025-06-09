import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const conn = mongoose.connect(process.env.DB_URL)

conn
    .then((success) => {
        console.log('DB Connected')
    })
    .catch((err) => {
        console.log(err)
        console.log('DB Error')
    })

export default conn;