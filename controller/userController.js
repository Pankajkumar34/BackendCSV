const userModel= require("../model/userModel")
const csv=require("csvtojson")
const importData=(req,res)=>{
    try {
        const userData=[]
        csv().fromFile(req.file.path).then(async(resp)=>{
            for(let i=0;i<resp.length;i++){
                userData.push({
                    Name:resp[i].Name,
                    Age:resp[i].Age,
                  Address:resp[i].Address
                })
                
            }
           const mydata= await userModel.insertMany(userData)
           res.status(200).json({staus:true,msg:"true",mydata})
        })
        
    } catch (error) {
        res.status(400).json({staus:false,err:error.message})
    }
}

module.exports={importData}