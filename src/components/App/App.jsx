import { Route, HashRouter as Router } from "react-router-dom";
import MovieList from "../MovieList/MovieList";
import MovieDetails from "../MovieDetails/MovieDetails";
import AddMovie from "../AddMovie/AddMovie";
import { Heading } from "@chakra-ui/react";


function App() {
  return (
    <div className="App">
      <Heading as="h1" size="2xl" color="teal.500" textAlign="center" m={5}>
        Ty's Movie List Application
      </Heading>{" "}
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
