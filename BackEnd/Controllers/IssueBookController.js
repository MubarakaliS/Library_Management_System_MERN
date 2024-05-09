const mongoose=require('mongoose')

const issueBookModel = require('../Models/IssueBookModel')
//Create User
const addBookIssue = async (req, res) => {
    const { isbn, registerNo, issueDate } = req.body;

    try {
        
        const newIssueBook = await issueBookModel.create({ isbn, registerNo, issueDate });

        res.status(200).json(newIssueBook);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

//GET ALL

const getAllIssueBook= async (req, res) => {
    try {
        const issueBooks = await issueBookModel.find({})
        res.status(200).json(issueBooks);
    } catch (err) {
        res.status(400).json({ Error: err.message })
    }
}

const getSingleIssueBook = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ Error: "Book Not Found" })
    }
    try {
        const singleBook = await issueBookModel.findById(id)
        res.status(200).json(singleBook)
    } catch (err) {
        res.status(400).json({ Error: err.message })
    }
}

//PATCH

const updateIssueBook=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({Error:"User Not Found"})
    }
    try{
        const updateIssueBook=await issueBookModel.findByIdAndUpdate(
            {
                _id:id
            },{
                ...req.body
            }
        )
        res.status(200).json(updateIssueBook)
    }catch(err){
        res.status(400).json({Error:err.message})
    }
}

//DELETE User

const deleteIssueBook = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ Error: "Book Not Found" })
    }
    try {
        const book = await issueBookModel.findByIdAndDelete(id)

    } catch (err) {
        res.status(400).json({ Error: err.message })
    }
}




module.exports={addBookIssue,getAllIssueBook,updateIssueBook,deleteIssueBook,getSingleIssueBook}








