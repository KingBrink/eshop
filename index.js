import express from 'express';
import path from 'path'
import {connection} from './config/index.js'
// create an express app
const app = express()
const port = +process.env.PORT || 4000
const router = express.Router()
// middleware
app.use(router, express.static('./static'))
// endpoint
router.get('^/$|/eShop', (req, res) => {
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
})
app.listen(port, () => {
    console.log('Server is running on port: ' + port)
})