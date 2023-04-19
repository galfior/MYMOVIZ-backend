var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const movieDBkey = process.env.movieDBkey


router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${movieDBkey}`)
   .then(response => response.json())
   .then(data => {
    res.json({ movies: data.results });
   });
})
// toto

module.exports = router;





