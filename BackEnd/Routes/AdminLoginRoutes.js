const express=require('express');
const router=express.Router()
// const auth=require('../Middleware/Auth')
const {adminSignIn,adminSignUp,getAdminId,createNewAdmin}=require('../Controllers/AdminLoginController')

router.post('/adminSignUp',adminSignUp)
router.post('/adminSignIn',adminSignIn)
router.get('/',getAdminId)
router.post('/',createNewAdmin)
module.exports=router