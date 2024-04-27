import  { useState, useEffect } from 'react';
import MovieList from './MovieList';
import FilterOptions from './FilterOptions';
import movieData from './movies.json'; 

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filterLanguage, setFilterLanguage] = useState('');
  const [filterCountry, setFilterCountry] = useState('');
  const [filterGenre, setFilterGenre] = useState('');

  useEffect(() => {
    setMovies(movieData);
    setFilteredMovies(movieData);
  }, []);

  useEffect(() => {
    let filtered = [...movies];

    if (filterLanguage) {
      filtered = filtered.filter(movie =>
        movie.movielanguages.includes(filterLanguage)
      );
    }
    if (filterCountry) {
      filtered = filtered.filter(movie =>
        movie.moviecountries.includes(filterCountry)
      );
    }
    if (filterGenre) {
      filtered = filtered.filter(movie =>
        movie.moviegenres.includes(filterGenre)
      );
    }

    setFilteredMovies(filtered);
  }, [filterLanguage, filterCountry, filterGenre, movies]);

  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case 'language':
        setFilterLanguage(value);
        break;
      case 'country':
        setFilterCountry(value);
        break;
      case 'genre':
        setFilterGenre(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Movie Catalog</h1>
      <FilterOptions
        onFilterChange={handleFilterChange}
        movies={movies}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
