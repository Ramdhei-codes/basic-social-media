const posts = require('../components/posts/network')

function router(server) {
    server.use('/post', posts)
}

module.exports = router