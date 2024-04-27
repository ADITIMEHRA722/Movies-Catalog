import PropTypes from 'prop-types'; 

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map(movie => (
        <div key={movie.imdbmovieid} className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src={movie.moviemainphotos[0]} alt={movie.movietitle} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{movie.movietitle}</h2>
            <p className="text-gray-700 mb-2">Language: {movie.movielanguages.join(', ')}</p>
            <p className="text-gray-700 mb-2">Country: {movie.moviecountries.join(', ')}</p>
            <p className="text-gray-700 mb-2">Genre: {movie.moviegenres.join(', ')}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    imdbmovieid: PropTypes.string.isRequired,
    movietitle: PropTypes.string.isRequired,
    movielanguages: PropTypes.arrayOf(PropTypes.string).isRequired,
    moviecountries: PropTypes.arrayOf(PropTypes.string).isRequired,
    moviemainphotos: PropTypes.arrayOf(PropTypes.string).isRequired,
    moviegenres: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
};

export default MovieList;
