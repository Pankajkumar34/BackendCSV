const express=require("express")
const mongodb = require("./mongoodb/Mongoo")
const userRouters=require('./userRouters/userRouters')
const app=express()
const port=4000
mongodb()

app.use(express.json())
app.use('/',userRouters)

app.listen(port,()=>{
    console.log("running 4000")
})