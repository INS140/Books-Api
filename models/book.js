const mongoose = require('mongoose')
const { Schema } = mongoose

const bookSchema = new Schema({
    title: {type: String, required: true},
    description: String,
    year: Number,
    quantity: {type: Number, required: true},
    imageURL: {type: String, default: "https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png"}

})

module.exports = mongoose.model('Book', bookSchema)