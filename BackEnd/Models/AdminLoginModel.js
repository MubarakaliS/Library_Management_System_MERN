const mongoose=require('mongoose')
const schema=mongoose.Schema

const adminLoginSchema=new schema(
    {
        adminName: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
            unique:true
        },
        adminEmail: {
            type: String,
            required: true,
            unique:true
        },
        adminId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"admin",
            require:true
        }
    },{
        timestamps:true
    }
)

module.exports=mongoose.model("Admin",adminLoginSchema)