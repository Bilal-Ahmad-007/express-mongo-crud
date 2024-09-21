
const mongoose=require("mongoose") 
require('dotenv').config();
const DB_URL=process.env.DB_URL



exports.DBConnection= async()=>{
    try {
      const mongo= await mongoose.connect(DB_URL)
        console.log(`MongoDB Connected: ${mongo.connection.host}`)
    } catch (error) {
        console.log(`db connection error: ${error}`)
            process.exit(1)        
    }
}

