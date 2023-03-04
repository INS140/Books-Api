require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// Connect Mongoose
mongoose.set({strictQuery: true})
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(console.log('MONGO CONNECTED'))

// Middleware
app.use(express.json())

// Routes

app.get('/', (req, res) => {
    res.json('Hello World!')
})

app.use('/books', require('./controllers/books'))

// Server Listener
app.listen(process.env.PORT, () => console.log('SERVER LIVE'))