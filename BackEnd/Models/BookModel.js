const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    publicationYear: {
        type: Number,
        required: true
    },
    edition: {
        type: String,
        required: true
    },
    availableStatus: {
        type: Number,
        required: true
    },
    bookImage: {
        type: String
        //You might store the image URL or file path
    }
}, {
    timestamps: true
}
);


module.exports = mongoose.model("Book", bookSchema);
