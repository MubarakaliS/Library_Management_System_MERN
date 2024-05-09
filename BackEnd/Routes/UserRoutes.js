const express=require('express')
const auth=require('../Middleware/Auth')
const path=require('path')
const router=express.Router();
const app=express();

const {addUser,getUser,getSingleUser,updateUser,deleteUser}=require('../Controllers/UserController')

app.use(express.json())
const multer = require('multer')


const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '..', 'upload/userImages'));
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
})


router.post('/',upload.single('userImage'),addUser)

// router.post('/',addUser)
router.get('/',getUser)
router.get('/:id',getSingleUser)
router.patch('/:id',updateUser)
router.delete('/:id',deleteUser)

module.exports=router