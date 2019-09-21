
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const config = require('./db')

const users = require('./routes/user')

mongoose.Promise = global.Promise
mongoose.connect(config.DB, {useNewUrlParser: true}).then(
	() => {console.log('database is connected')},
	err => {console.log('can not connect to the database '+ err)}
)

app.use(cors())
app.use(passport.initialize())
require('./passport')(passport)

app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

app.use('/api/users', users)

app.get('/', function(req,res) {
	res.send('hello')
})

const PORT = process.env.PORT || 5000

app.listen(PORT,() => {
	console.log(`Server is running on port ${PORT}`)
})