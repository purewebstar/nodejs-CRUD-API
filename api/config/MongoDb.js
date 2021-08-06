'use strict'
/**
 *  Module dependencies
 */
import dotenv from 'dotenv'
dotenv.config()

const initDatabase = (mongoose) =>{
    mongoose.connect(process.env.DATABASE_URI,{
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).
    then(() => console.log("Connected to mongoDb"))
    .catch(err => console.log(err.message))
}

export default initDatabase