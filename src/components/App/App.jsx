import { Route, HashRouter as Router } from "react-router-dom";
import MovieList from "../MovieList/MovieList";
import MovieDetails from "../MovieDetails/MovieDetails"; // Import the MovieDetails component
import AddMovie from "../AddMovie/AddMovie";
import { ChakraProvider } from "@chakra-ui/react";
// import "./App.css";
// import { Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <h1>Ty's Movie List</h1>
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
