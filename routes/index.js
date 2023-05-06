var express = require('express');
var router = express.Router();

const data = require("../model/helper");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
});

// GET movie list from db
router.get("/", function(req, res, next) {
  db("SELECT * FROM my_films;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});


module.exports = router;
