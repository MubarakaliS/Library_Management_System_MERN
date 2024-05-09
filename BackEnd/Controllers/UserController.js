const mongoose=require('mongoose')

const userModel=require('../Models/UserModel')

//Create User
const addUser = async (req, res) => {
    
    const {studentName,registerNo,branch,email,mobileNumber } = req.body
    let userImage;


    if(req.file){
        userImage=`${req.protocol}://${req.host}:4000/upload/userImages/${req.file.originalname}`
    }

    try {
        // Use req.file to access the uploaded file
        await userModel.create({studentName,registerNo,branch,userImage,email,mobileNumber })

        res.status(200).json(book);
    } catch (err) {
        res.status(400).json({ "Error": err.message });
    }
}



//GET all user

const getUser=async(req,res)=>{
    try{
        const users=await userModel.find({})
        res.status(200).json(users)
    }catch(err){
        res.status(400).json({"Error":err.message})
    }
}

//GET Single User

const getSingleUser=async(req,res)=>{
    const {id}=req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ Error: "User Not Found" })
    }
    try{
        const singleUser=await userModel.findById(id)
        res.status(200).json(singleUser)
    }catch(err){
        res.status(400).json({"Error":err.message})
    }
}

//PATCH

const updateUser=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({Error:"User Not Found"})
    }
    try{
        const updateUser=await userModel.findByIdAndUpdate(
            {
                _id:id
            },{
                ...req.body
            }
        )
        res.status(200).json(updateUser)
    }catch(err){
        res.status(400).json({Error:err.message})
    }
}

//DELETE User

const deleteUser=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({Error:'User Not Found'})
    }
    try{
        const deleteUser=await userModel.findByIdAndDelete(id)
    }catch(err){
        res.status(400).json({Error:err.message})
    }
}


module.exports={addUser,getUser,getSingleUser,updateUser,deleteUser}