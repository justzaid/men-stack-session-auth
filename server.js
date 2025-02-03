// Require

require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const morgan = require('morgan')
const path = require('path')
const port = process.env.PORT ? process.env.PORT : '3000'

// Creates a connection in MongoDB Database
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
    console.log('hello')
    console.log(`Connected to MongoDB Database ${mongoose.connection.name}`)
})

// Controllers

const pagesCtrl = require('./controllers/pages')

const authCtrl = require('./controllers/auth')

// Middleware
app.use(express.urlencoded({ extended: false}))
app.use(express.static(path.join(__dirname, "public")));

// Route handlers
app.get('/', pagesCtrl.home)
app.get('/auth/sign-up', authCtrl.signUp)
app.post('/auth/sign-up', authCtrl.addUser)
app.get('/auth/sign-in', authCtrl.signInForm)
app.post('/auth/sign-in', authCtrl.signIn)

app.listen(port, () => {
    console.log(`The express app is ready on port ${port}`)
})


