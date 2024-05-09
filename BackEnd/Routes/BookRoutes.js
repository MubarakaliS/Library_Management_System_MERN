const express = require('express');
const app = express();
const router = express.Router();

const path = require('path')

// const auth = require('../Middleware/Auth')

const { addBook, getBooks, getSingleBook, updateBook, deleteBook, searchBookIsbn, searchBookTitle, updateIssueBook } = require('../Controllers/BookController')
app.use(express.json())


const multer = require('multer')


const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '..', 'upload/bookImages'));
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
})


router.post('/',upload.single('bookImage'),addBook)



router.get('/', getBooks);
router.get('/:id', getSingleBook);
router.patch('/:id', updateBook);
router.delete('/:id', deleteBook)
router.get('/isbn/:isbn', searchBookIsbn);
router.get('/bookTitle/:title', searchBookTitle)

router.patch('/update-books/:id', updateIssueBook);
module.exports = router