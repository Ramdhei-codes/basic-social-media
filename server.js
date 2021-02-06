const express = require('express')
const app = express()
const server = require('http').Server(app)
const router = require('./network/router')
const db = require('./db')

db('mongodb+srv://db_user-socialApp:nHenEiTNAjIieOAG@cluster0.ax3ku.mongodb.net/social-media?retryWrites=true&w=majority')

const bodyParser = require('body-parser')

app.use(bodyParser.json())

router(app)

server.listen(3000, function() {
    console.log('Listening on http://localhost:3000')
})