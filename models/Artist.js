var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ArtistSchema = new Schema({
  name: String,
  imageUrls: String,
  genres: Array
})

//this builds out my model schema
var Artist = mongoose.model('Artist', ArtistSchema)

module.exports = Artist
