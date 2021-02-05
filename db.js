const db = require('mongoose')

db.Promise = global.Promise

function connect(connectionUrl) {
    db.connect(connectionUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log('[DB] successfully connected')
        })
        .catch(error => {
            console.error(error.message)
        })
}

module.exports = connect