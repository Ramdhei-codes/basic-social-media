const statusMessages = {
    '200': 'OK',
    '201': 'Created',
    '400': 'Invalid format',
    '404': 'Not found',
    '500': 'Internal server error'
}

exports.success = function (req, res, message, status) {
    let statusCode = status
    let statusMessage = message

    if(!status) { status = 200 }

    if(!message) { statusMessage = statusMessages[status] }

    res.status(statusCode).send({
        error: '',
        body: statusMessage
    })
}

exports.error = function (req, res, message, status, details) {
    let statusCode = status
    let statusMessage = message

    if(!status) { status = 500 }

    if(!message) { statusMessage = statusMessages[status] }

    res.status(statusCode).send({
        error: statusMessage,
        body: '',
    })
    console.log(details)
}