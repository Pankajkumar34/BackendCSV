const express=require("express")
const userRoute=express.Router()
const userController=require('../controller/userController')
const multer=require("multer")
const path=require("path")

const stroage=multer.diskStorage({
    destination:'./public/upload',
    filename:((req,file,cb)=>{
        cb(null,`${file.fieldname}_${path.extname(file.originalname)}`)
    })
})
const upload=multer({storage:stroage})
userRoute.post('/import',upload.single("file"),userController.importData)
module.exports=userRoute

