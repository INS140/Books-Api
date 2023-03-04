const books = require('express').Router()
const Book = require('../models/book')

// Get All Books
books.get('/', async (req, res) => {
    try {
        const foundBooks = await Book.find()
    res.status(200).json(foundBooks)
    } catch (err) {
        console.log(err)
        res.status(404).json(err)
    }
})

// Seed Data
books.get('/seed', async (req, res) => {
    try{
        await Book.deleteMany()
    } catch (err) {
        console.log(err)
        res.status(404).res.json(err)
    }
    
    try {
        await Book.insertMany([{
            "title": "The Shinobi Initiative",
            "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
            "year": 2014,
            "quantity": 10,
            "imageURL": "https://imgur.com/LEqsHy5.jpeg"
        },
        {
            "title": "Tess the Wonder Dog",
            "description": "The tale of a dog who gets super powers",
            "year": 2007,
            "quantity": 3,
            "imageURL": "https://imgur.com/cEJmGKV.jpg"
        },
        {
            "title": "The Annals of Arathrae",
            "description": "This anthology tells the intertwined narratives of six fairy tales.",
            "year": 2016,
            "quantity": 8,
            "imageURL": "https://imgur.com/VGyUtrr.jpeg"
        },
        {
            "title": "WARP",
            "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
            "year": 2010,
            "quantity": 4,
            "imageURL": "https://imgur.com/qYLKtPH.jpeg"
        }])
        res.status(200).json({
            message: 'Seed successful'
        })
    } catch(err) {
        res.status(400).json({
            message: 'Seed unsuccessful'
        })
    }
})


// Create New Book
books.post('/', async (req, res) => {
    console.log(req.body)
    try {
        await Book.create(req.body)
        res.status(201).json({ message: 'successfully created' })
    } catch (err) {
        console.log(err)
        res.status(400).json({ error: err })
    }
})

// Get Specific Book
books.get('/:id', async (req, res) => {
    try {
        const foundBook = await Book.findById(req.params.id)
        res.status(200).json(foundBook)
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err })
    }
})

// Update Book
books.put('/:id', async (req, res) => {
    console.log(req.params, req.body)
    try {
        await Book.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ message: 'successfully updated' })
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err })
    }
})

// Delete Book
books.delete('/:id', async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'successfully deleted' })
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err })
    }
})

module.exports = books