import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory(); // For navigation
  const movie = useSelector((state) => state.movieDetails);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIE_DETAILS", payload: id });
  }, [dispatch, id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Navigate back to the movie list
  const navigateBack = () => {
    history.push("/");
  };

  return (
    <div data-testid="movieDetails">
      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={movie.title} />
      <p>{movie.description}</p>
      {/* Display genres if available */}
      {movie.genres &&
        movie.genres.map((genre, index) => (
          <span key={index}>
            {genre}
            {index < movie.genres.length - 1 ? ", " : ""}
          </span>
        ))}
      <button onClick={navigateBack} data-testid="toList">
        Back to List
      </button>
    </div>
  );
};

export default MovieDetails;
