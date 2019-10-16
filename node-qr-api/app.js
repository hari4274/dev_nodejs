const express = require('express')
const bodyParser = require('body-parser')
// DB Connection
const qr = require('./qr')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(express.static('public'));
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    // response.json({ info: 'Node.js, Express, and QR API' })
    response.sendFile('Readme.md');
})

app.get('/qr/:qrInput', qr.getQr)
app.get('/qr/:size/:qrInput', qr.getQr)

app.listen(port, () => {
    console.log(`QR App running on port ${port}.`)
})