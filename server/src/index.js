require('dotenv').config()
require('./connection')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(require('./routes'))

app.listen(process.env.PORT, () => {
	console.log("server running at port: ", process.env.PORT)
})  