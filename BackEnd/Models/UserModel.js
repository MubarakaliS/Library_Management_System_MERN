const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema(
    {
        studentName: {
            type: String,
            require: true
        },
        registerNo: {
            type: String,
            require: true
        },
        branch: {
            type: String,
            require: true
        },
        userImage: {
            type: String,
        },
        email: {
            type: String,
            require: true
        },
        mobileNumber: {
            type: Number,
            require: true
        }
    }, {
    timestamps: true
}
)

module.exports = mongoose.model("User", userSchema)