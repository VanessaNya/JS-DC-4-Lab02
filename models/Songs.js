var mongoose = require('mongoose')
var Schema = mongoose.Schema

var SongsSchema = new Schema({
  title: String,
  artist: String,
  album: String,
})

//this builds out my model schema
var Songs = mongoose.model('Songs', SongsSchema)

module.exports = Songs
