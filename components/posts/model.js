const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
    // user: {
    //     type: Schema.ObjectId,
    //     ref: 'User'
    // },
    user: String,
    text: {
        type: String,
        required: true
    },
    date: Date
})

const model = mongoose.model('Post', postSchema)

module.exports = model