import PropTypes from 'prop-types'; 
const FilterOptions = ({ onFilterChange, movies }) => {
  const languages = [...new Set(movies.flatMap(movie => movie.movielanguages))];
  const countries = [...new Set(movies.flatMap(movie => movie.moviecountries))];
  const genres = [...new Set(movies.flatMap(movie => movie.moviegenres))];

  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <FilterDropdown
        label="Language"
        options={languages}
        onSelect={value => onFilterChange('language', value)}
      />
      <FilterDropdown
        label="Country"
        options={countries}
        onSelect={value => onFilterChange('country', value)}
      />
      <FilterDropdown
        label="Genre"
        options={genres}
        onSelect={value => onFilterChange('genre', value)}
      />
    </div>
  );
};


FilterOptions.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({
    movielanguages: PropTypes.arrayOf(PropTypes.string),
    moviecountries: PropTypes.arrayOf(PropTypes.string),
    moviegenres: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
};

const FilterDropdown = ({ label, options, onSelect }) => {
    return (
      <div>
        <label className="block text-sm font-medium">{label}</label>
        <select
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          onChange={e => onSelect(e.target.value)}
        >
          <option value="">All</option>
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
    );
  };

  FilterDropdown.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSelect: PropTypes.func.isRequired,
  };

export default FilterOptions;
