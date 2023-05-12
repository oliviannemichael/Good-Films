var express = require("express");
var router = express.Router();

const db = require("../model/helper");

// To QUERY a film in db
router.get("/", function(req, res, next) {
  db("SELECT * FROM my_films;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// To SAVE a film into db
router.post("/", function (req, res, next) {
  let filmName = req.body.name;
  let url = req.body.url;
  let imdbFilmId = req.body.id;
  console.log(imdbFilmId);
  db(`insert INTO my_films (film_name, image_url, imdb_film_id) VALUES ("${filmName}", "${url}", "${imdbFilmId}");`)
    .then((results) => db("SELECT * FROM my_films;"))
    .then((results2) => {
      res.send(results2.data);
    })
    .catch((err) => res.status(500).send(err));
});



module.exports = router;
