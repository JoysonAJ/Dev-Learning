import mongoose  from "mongoose";
import { DB_NAME } from "../constants.js";
import process from "node:process" 

const connectDB = async() =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        // console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        // console.log({
        //     dataBaseUrl:process.env.MONGODB_URL,
        //     dbName:DB_NAME
        // })
        console.log({
            result:`${process.env.MONGODB_URL}/${DB_NAME}`
        })
        // console.log("mondoDbConnected",connectionInstance)
    } catch (err) {
        console.error("Mongo DB connection error",err);
        throw err
    }
}

export default connectDB