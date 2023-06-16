const mongoose=require("mongoose")
const uri="mongodb://localhost:27017/csvData"

const connectMongoo=()=>{
    mongoose.connect(uri).then(res=>{
        console.log("mongoo connected")
    }).catch(err=>{
        console.log("mongoo not connected");
    })
}
module.exports=connectMongoo