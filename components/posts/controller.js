const store = require('./store')

function addPost(user, text) {
    return new Promise((resolve, reject) => {

        if(!user || !text) {
            return reject('[Controller error] Invalid data')
        }

        const newPost = {
            "user": user,
            "text": text,
            "date": new Date()
        }

        store.addPost(newPost)

        resolve(newPost)
    })
}

function updatePost(id, newText) {
    return new Promise(async (resolve, reject) => {
        if(!id || !newText) {
            return reject('Invalid data')
        }

        const updatedPost = await store.updateText(id, newText)
        resolve(updatedPost)
    })
}

function getPosts() {
    return store.getPosts()
}

module.exports = {
    add: addPost,
    update: updatePost,
    get: getPosts
}