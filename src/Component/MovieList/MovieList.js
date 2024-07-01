// MovieList.js
import React, { useEffect, useState } from 'react';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from backend API
    fetch('/api/movies')
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
    <h1>MovieList</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.genre}</p>
          <p>{movie.showtimes}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
