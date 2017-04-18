var express = require('express')
var hbs = require('express-handlebars')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

//establishes connection to DB
// mongoose.connect('mongodb://localhost:27017/spotify')

var Artist = require('./models/Artist')
var Songs = require('./models/Songs')

var app = express()

app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res) {

  Artist.find({}, function(err, artists) {
    res.render('index', {artists: artists})
  })

})

app.get('/artist/:id', function (req, res) {
  //shows route
  //this will show a specific artist
  Artist.findById(req.params.id, function(err, artist) {
    res.render('artist/artist', artist)
  })
})

app.get('/artist/new', function (req, res) {
  //new view
  res.render('artists/new')
})

app.post('/artist/new', function (req, res) {
  //create new artist in db
  //renders show view(what user sees) for new article
  var newArtist = new Artist({
    name: data.name,
    imageUrls: data.imageUrls
    genres: data.genres
  })

 newArtist.save()
 res.redirect('/')

})

app.get('/artist/edit', function (req, res) {
  //edits list of artist
  Artist.findById(req.params.id, function(err, artist) {
    res.render('artist/edit', artist)
  })
})

app.post('/artist/edit', function (req, res) {
  Artist.findById(req.body.id, function(err, artist) {
    artist.data = req.body.description
    artist.save()
    res.redirect('/artists/' + artist.name)
  })
})


app.get('/songs/:id', function(req, res) {
  //this will show a specific song
  Songs.findById(req.params.id, function(err, songs) {
    res.render('songs/songs', songs)
  })
})

app.get('/songs/new', function(req, res) {
  //new view
  res.render('songs/new')
})

app.post('/songs/new', function (req, res) {

  var newSong = new Song({
    title: data.title
    artist: data.artist
    album: data.album
  })

  newSong.save()
  res.redirect('/')

})

app.get('/songs/edit', function (req, res) {
  //edits list of songs
  Songs.findById(req.params.id, function(err, songs) {
    res.render('songs/edit', songs)
  })
})

app.post('/songs/edit', function (req, res) {
  Songs.findById(req.body.id, function(err, songs) {
    songs.data = req.body.description
    songs.save()
    res.redirect('/songs/' + songs.title)
  })
})

app.listen(3000, function() {
  console.log('server is running on port 3000')
})
