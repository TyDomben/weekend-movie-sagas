import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Box, Grid, Image, Text, Button, GridItem } from "@chakra-ui/react";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, [dispatch]);

  const handleMovieClick = (movieId) => {
    history.push(`/details/${movieId}`);
  };

  const navigateToAddMovie = () => {
    history.push("/add-movie");
  };

  return (
    <Box p={4} boxShadow="lg" rounded="lg" m={4}>
    <Box p={4} bg="white" rounded="sm" m={4}>
      <Text fontSize="4xl" color="brand.500" mb={4} boxShadow="md">
          Ty's Movie List
        </Text>
      </Box>

      <Button colorScheme="brand" mb={4} onClick={navigateToAddMovie}>
        Add Movie
      </Button>
      <Grid
        templateColumns={{
          sm: "repeat(2, 1fr)",
          // sm: 'repeat(2, 1fr)': On small screens (sm), the grid will have 2 columns. Each column takes up an equal fraction (1fr) of the available space.
          md: "repeat(3, 1fr)",
          //
          lg: "repeat(4, 1fr)",
          //
        }}
        gap={6}
      >
        {movies.map((movie) => (
          <GridItem
            key={movie.id}
            boxShadow="md"
            p="6"
            rounded="md"
            bg="white"
            onClick={() => handleMovieClick(movie.id)}
            _hover={{ bg: "gray.100", cursor: "pointer" }}
            tabIndex={0} // TODO add description on hover?
          >
            <Image
              src={movie.poster}
              alt={movie.title}
              boxSize="200px"
              objectFit="cover"
              rounded="md"
            />
            <Text
              mt={2}
              fontSize="xl"
              fontWeight="semibold"
              lineHeight="short"
              textAlign="left"
            >
              {movie.title}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default MovieList;
