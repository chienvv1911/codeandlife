const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    tags: {
        type: [String],
    },
    content: {
        type: String, 
        required: true
    }
})

module.exports = Post = mongoose.model("post", postSchema)