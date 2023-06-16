const mongoose=require("mongoose")
const userModel=new mongoose.Schema({
    Name:{type:String},
    Age:{type:Number},
    Address:{type:String}
})

module.exports=mongoose.model("csvfile",userModel)