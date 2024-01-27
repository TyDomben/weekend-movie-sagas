import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory(); // For navigation
  const movie = useSelector((state) => state.movieDetails);
  const isLoading = useSelector((state) => state.isLoading);

  console.log("Movie ID from URL:", id);

  useEffect(() => {
    // Dispatch the action to fetch movie details
    dispatch({ type: "FETCH_MOVIE_DETAILS", payload: id });
  }, [dispatch, id]);

  // Navigate back to the movie list
  const navigateBack = () => {
    history.push("/");
  };

  if (isLoading || !movie) {
    // Show loading only if we are loading or if the movie is null - to prevent a white
    return <div>Loading...</div>;
  }

  // Now we are sure that `movie` is defined and we can access its properties
  return (
    <>
      <h1>Ty's Movie Details</h1>

      <div data-testid="movieDetails">
        <h2>{movie.title}</h2>
        <h3>Movie ID: {id}</h3>

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
    </>
  );
};

export default MovieDetails;
