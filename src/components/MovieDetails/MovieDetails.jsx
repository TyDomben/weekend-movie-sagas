import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import combinedActions from "../../redux/actions/actions";
import { Box, Image, Text, Button, Heading } from "@chakra-ui/react";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const movieDetailsState = useSelector((state) => state.movieDetails);
  const movie = movieDetailsState.data;
  const isLoading = movieDetailsState.isLoading;

  useEffect(() => {
    dispatch(combinedActions.fetchMovieDetails(id));
  }, [dispatch, id]);

  useHistory();
  const navigateBack = () => {
    history.push("/");
  };

  if (isLoading || !movie) {
    return <Box p={4} bg="white" rounded="sm" m={4}> 
      <Heading as="h1" size="xl">
      Loading...
      </Heading>
      consider restarting the application</Box>;
  }

  return (
    <Box p={4} bg="white" rounded="sm" m={4}>
      <Heading as="h1" size="xl">
        Ty's Movie Details
      </Heading>
      <Box mt={4} p={4} boxShadow="md" rounded="md">
        <Heading as="h2" size="lg">
          {movie.title}
        </Heading>
        <Text color="brand.600">Movie ID: {id}</Text>
        <Image
          src={movie.poster}
          alt={movie.title}
          boxSize="300px"
          objectFit="cover"
          my={4}
        />
        <Text fontSize="md">{movie.description}</Text>
        <Box mt={4}>
          {movie.genres &&
            movie.genres.map((genre, index) => (
              <Text as="span" key={index} mr={2}>
                {genre}
                {index < movie.genres.length - 1 ? ", " : ""}
              </Text>
            ))}
        </Box>
        <Button mt={4} colorScheme="brand" onClick={navigateBack}>
          Back to List
        </Button>
      </Box>
    </Box>
  );
};

export default MovieDetails;
