const mongoose=require("mongoose")
const snipSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    code:{
        type: Object,
        required: true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }},
    {
        timestamps:true
    }

)



const Snip=mongoose.model("Snip",snipSchema)
module.exports=Snip;