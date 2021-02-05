const express = require('express')
const app = express()
const server = require('http').Server(app)

const router = express.Router()
const bodyParser = require('body-parser')

app.use(router)

app.use(bodyParser.json())

router.get('/', (req, res) => {
    res.send('Hola mundo')
})

server.listen(3000, function() {
    console.log('Listening on http://localhost:3000')
})