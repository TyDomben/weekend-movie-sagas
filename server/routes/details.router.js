const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");


// GET route to fetch movie details by ID
router.get("/:id", (req, res) => {
  const movieId = req.params.id;
  const queryText = `
      SELECT movies.*, ARRAY_AGG(genres.name) as genres
      FROM movies
      JOIN movies_genres ON movies.id = movies_genres.movie_id
      JOIN genres ON movies_genres.genre_id = genres.id
      WHERE movies.id = $1
      GROUP BY movies.id;
    `;
  pool
    .query(queryText, [movieId])
    .then((response) => res.send(response.rows[0]))
    .catch((err) => {
      console.error("Error in GET /api/details", err);
      res.sendStatus(500);
    });
});

module.exports = router;
