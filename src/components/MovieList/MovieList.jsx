import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./MovieList.css";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, [dispatch]);

  const handleMovieClick = (movieId) => {
    // Navigate to the details page

    // for now we just want to navigate to the details page
    // when the user clicks on a movie poster

    // Dispatch action to fetch movie details
    // !dispatch({ type: "FETCH_DETAILS", payload: movieId });

    // Navigate to the details page
    history.push(`/details/${movieId}`);
  };

  return (
    <main>
      <h1>Ty's Movie List</h1>
      <section className="movies">
        {movies.map((movie) => (
          <div data-testid="movieItem" key={movie.id}>
            <h3>{movie.title}</h3>
            <img
              className="movie-poster"
              src={movie.poster}
              alt={movie.title}
              width="150"
              height="150"
              onClick={() => handleMovieClick(movie.id)}
            />
          </div>
        ))}
      </section>
    </main>
  );
}

export default MovieList;
