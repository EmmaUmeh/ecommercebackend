import * as express from 'express'
const app = express.Router()


module.exports = () => {
    const login = require('../controller/login.controllers')

    // Retrieve the users info
    app.post('/api/login', login.findOne)
}