const express=require("express")
const BodyParser=require("body-parser")
const db=require("./config/db")
const PORT=process.env.PORT || 3000
const userRoute=require("./routes/userRoutes")

const app=express()


app.use(express.json())
app.use(BodyParser.json())


app.use("/api/user",userRoute)

app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`)
})