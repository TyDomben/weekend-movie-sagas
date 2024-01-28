import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import combinedActions from '../../redux/actions/actions';

const AddMovie = () => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    poster: '',
    description: '',
    // genre: '', // Uncomment if adding genre functionality
  });
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setNewMovie({ ...newMovie, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(combinedActions.addMovie(newMovie));
    // Reset form
    setNewMovie({ title: '', poster: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Movie</h2>
      <input
        name="title"
        value={newMovie.title}
        onChange={handleInputChange}
        placeholder="Title"
      />
      <input
        name="poster"
        value={newMovie.poster}
        onChange={handleInputChange}
        placeholder="Poster URL"
      />
      <textarea
        name="description"
        value={newMovie.description}
        onChange={handleInputChange}
        placeholder="Description"
      />
      {/* 
      <select name="genre" value={newMovie.genre} onChange={handleInputChange}>
        // Options for genres
      </select> 
      */}
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
