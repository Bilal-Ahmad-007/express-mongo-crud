const express = require('express')
const mongoose= require("mongoose")
const dotenv=require("dotenv")
const bodyParser = require('body-parser')



const app = express()
app.use(bodyParser.json())
const PORT = process.env.PORT || 3000;
const MONGOURL="mongodb://localhost:27017/crud";


mongoose.connect(MONGOURL).then(()=>{
  console.log("database connected")
  app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
})

}).catch((err)=>{
  console.log(err)
})



