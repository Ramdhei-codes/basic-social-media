'use strict'

const Model = require('./model')

function addPost(postData) {
    const newPost = new Model(postData)
    newPost.save()
}

async function getPosts() {
    const posts = await Model.find()
    return posts
}

async function updateText(id, newText) {
    try {
        const updatedPost = await Model.findById(id)
        return updatedPost
    } catch (error) {
        console.error(error.message)
    }
}

function deletePost(id) {
    return Model.deleteOne({_id: id})
}

module.exports = {
    addPost,
    getPosts,
    updateText,
    deletePost
}