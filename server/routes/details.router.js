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
// This query fetches all details from the 'movies' table, including a list of genre names for each movie.
// It connects the 'movies' table with 'movies_genres' (our link to genres), 
// then joins it with 'genres' to pull in the actual names of those genres.
// We're filtering with 'WHERE' to get details for a specific movie based on its ID.
// 'GROUP BY' makes sure we gather all the genre names for each unique movie.

  pool
    .query(queryText, [movieId])
    .then((response) => res.send(response.rows[0]))
    .catch((err) => {
      console.error("Error in GET /api/details", err);
      res.sendStatus(500);
    });
});

module.exports = router;
