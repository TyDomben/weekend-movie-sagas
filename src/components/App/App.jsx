import { Route, HashRouter as Router } from "react-router-dom";
import MovieList from "../MovieList/MovieList";
import MovieDetails from "../MovieDetails/MovieDetails";
import AddMovie from "../AddMovie/AddMovie";
import { Box, Heading } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Box
        bg="brand.400"
        w="100%"
        p={4}
        color="black"
        textTransform="uppercase"
        fontWeight="bold"
      >
        <Heading as="h1" size="2xl" textAlign="center" m={5}>
          Ty's Movie List Application
        </Heading>
      </Box>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/details/:id">
          <MovieDetails />
        </Route>

        {/* Add Movie page */}
        <Route path="/add-movie">
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}

export default App;
