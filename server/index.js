const express=require("express")
const app=express()
const mongoose=require("mongoose")
const cors=require("cors")
const dotenv=require("dotenv").config()

const PORT=process.env.PORT || 5000
const connectDb=async()=>{
    await mongoose.connect("mongodb://localhost:27017/userdetail")
    .then(()=>console.log("connected to the db"))
}
connectDb()

app.use(cors())
app.use(express.json())
app.use('/', require('./routes.user'))



app.listen(PORT,(err)=>{
    console.log(`Server is listening on port ${PORT}`)
})
