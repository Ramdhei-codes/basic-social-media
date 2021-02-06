const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.get('/', (req, res) => {
    controller.get()
        .then(data => {
            response.success(req, res, data, 200)
        })
        .catch(error => {
            response.error(req, res, 'Internal error', 500, error.message)
        })
})

router.post('/', (req, res) => {
    controller.add(req.body.user, req.body.content)
        .then((data) => {
            response.success(req, res, data, 201)
        })
        .catch(error => {
            response.error(req, res, 'Internal error', 500, error)
        })
})

router.patch('/', (req, res) => {
    controller.update(req.body.postId, req.body.content)
        .then(data => {
            response.success(req, res, data, 200)
        })
        .catch(error => {
            response.error(req, res, 'Internal error', 500, error.message)
        })
})


module.exports = router