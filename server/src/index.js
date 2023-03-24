require('dotenv').config()
require('./connection')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(require('./routes'))

app.listen(process.env.PORT, () => {
	console.log("server running at port: ", process.env.PORT)
})