import React, { useState } from "react";
import { useDispatch } from "react-redux";
import combinedActions from "../../redux/actions/actions";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  Box,
  Input,
  Textarea,
  Button,
  Heading,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const AddMovie = () => {
  // State to store form inputs for the new movie
  const [newMovie, setNewMovie] = useState({
    title: "",
    poster: "",
    description: "",
  });

  const dispatch = useDispatch();

  const history = useHistory();
  // Function to navigate back to the movie list
  useHistory();
  const navigateBack = () => {
    history.push("/");
  };
  // Updates state
  const handleInputChange = (event) => {
    setNewMovie({ ...newMovie, [event.target.name]: event.target.value });
  };
  // Handles form submission.
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(combinedActions.addMovie(newMovie)); // Dispatch action to add movie to store
    setNewMovie({ title: "", poster: "", description: "" }); // Reset form
  };
  // Render the form with Chakra UI components
  return (
    <Box boxShadow="md" rounded="md" bg="white" p={6}>
      <Heading as="h2" size="xl">
        Add a New Movie
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="title" isRequired mt={4}>
          <FormLabel>Title</FormLabel>
          <Input
            name="title"
            value={newMovie.title}
            onChange={handleInputChange}
            placeholder="Title"
          />
        </FormControl>

        <FormControl id="poster" isRequired mt={4}>
          <FormLabel>Poster URL</FormLabel>
          <Input
            name="poster"
            value={newMovie.poster}
            onChange={handleInputChange}
            placeholder="Poster URL"
          />
        </FormControl>

        <FormControl id="description" isRequired mt={4}>
          <FormLabel>Description</FormLabel>
          <Textarea
            name="description"
            value={newMovie.description}
            onChange={handleInputChange}
            placeholder="Description"
          />
        </FormControl>

        <Button type="submit" colorScheme="brand" mt={4}>
          Add Movie
        </Button>

        <Box p={6}>
          <Button mt={4} colorScheme="brand" onClick={navigateBack}>
            Back to List
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddMovie;
