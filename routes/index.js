var express = require("express");
var router = express.Router();

const db = require("../model/helper");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({ title: "Express" });
});

// SAVE a film into db
router.post("/api/movies", function (req, res, next) {
  let imdbFilmId = req.body.id;
  console.log(imdbFilmId);
  db(`insert INTO my_films (imdb_film_id) VALUES ("${imdbFilmId};")`)
    .then((results) => db("SELECT * FROM my_films;"))
    .then((results2) => {
      res.send(results2.data);
    })
    .catch((err) => res.status(500).send(err));
});

// To QUERY db of saved movies- GET

module.exports = router;
