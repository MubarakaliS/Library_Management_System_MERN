const mongoose = require('mongoose')
const Schema = mongoose.Schema
const issuBookSchema = new Schema({
    registerNo: {
        type: String,
        require: true
    },
    isbn: {
        type: String,
        required: true

    },
    issueDate: {
        type: Date,
        default: Date.now
    }
}
    , {
        timestamps: true
    }
);


module.exports = mongoose.model("IssueBook", issuBookSchema);
