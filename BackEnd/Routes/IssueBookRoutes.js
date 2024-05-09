const express=require('express');
const router=express.Router()

// const auth=require('../Middleware/Auth')

const {addBookIssue,getAllIssueBook,updateIssueBook,deleteIssueBook,getSingleIssueBook}=require('../Controllers/IssueBookController')

router.post('/',addBookIssue)
router.get('/',getAllIssueBook)
router.get('/:id',getSingleIssueBook);
router.patch('/:id',updateIssueBook)
router.delete('/:id',deleteIssueBook)
module.exports=router