const mongoose = require('mongoose');
const bookModel = require('../Models/BookModel');

const addBook = async (req, res) => {
    const { title, author, genre, isbn, publicationYear, edition, availableStatus } = req.body;
    
    let bookImage;


    if(req.file){
        bookImage=`${req.protocol}://${req.host}:4000/upload/bookImages/${req.file.originalname}`
    }

    try {
        // Use req.file to access the uploaded file
        const book = await bookModel.create({
            title,
            author,
            genre,
            isbn,
            publicationYear,
            edition,
            availableStatus,
            bookImage // Store the file path in the database
        });

        res.status(200).json(book);
    } catch (err) {
        res.status(400).json({ "Error": err.message });
    }
}




const getBooks = async (req, res) => {
    try {
        const books = await bookModel.find({});
        res.status(200).json(books);
    } catch (err) {
        res.status(400).json({ Error: err.message })
    }
}

//To get a single Book -GET

const getSingleBook = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ Error: "Book Not Found" })
    }
    try {
        const singleBook = await bookModel.findById(id)
        res.status(200).json(singleBook)
    } catch (err) {
        res.status(400).json({ Error: err.message })
    }
}

//To update a Book-PATCH

const updateBook = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ Error: "Book Not Found" })
    }
    try {
        const book = await bookModel.findByIdAndUpdate(
            {
                _id: id,
            },
            {
                ...req.body
            });
        res.status(200).json(book);

    } catch (err) {
        res.status(400).json({ Error: err.message })
    }
}

//To Delete a Book -DELETE

const deleteBook = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ Error: "Book Not Found" })
    }
    try {
        const book = await bookModel.findByIdAndDelete(id)

    } catch (err) {
        res.status(400).json({ Error: err.message })
    }
}





// Endpoint to fetch a book by ISBN
const searchBookIsbn = async (req, res) => {
    const { isbn } = req.params;
    try {
        const singleBook = await bookModel.findOne({isbn})
        res.status(200).json(singleBook)
    } catch (err) {
        res.status(400).json({ Error: err.message })
    }
}

// Endpoint to fetch a book by Title
const searchBookTitle = async (req, res) => {
    const { title } = req.params;
    try {
        const singleBook = await bookModel.findOne({title})
        res.status(200).json(singleBook)
    } catch (err) {
        res.status(400).json({ Error: err.message })
    }
}



const updateIssueBook = async (req, res) => {
    const { id } = req.params;
    const { availableStatus } = req.body;
  
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ Error: 'Book Not Found' });
      }
  
      const book = await bookModel.findByIdAndUpdate(
        { _id: id },
        { $set: { availableStatus } },
        { new: true } // To get the updated document
      );
  
      res.status(200).json(book);
    } catch (err) {
      res.status(400).json({ Error: err.message });
    }
  };



module.exports = { addBook, getBooks, getSingleBook, updateBook, deleteBook, searchBookIsbn,searchBookTitle ,updateIssueBook}