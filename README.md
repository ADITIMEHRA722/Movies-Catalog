# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

App.jsx file
1.The App component manages the movie catalog.
2.It imports hooks like useState and useEffect, along with other components like MovieList and FilterOptions.
3.Movie data is imported from a JSON file named movies.json.
4.The component sets up state variables to manage movies, filtered movies, and filter options (language, country, genre).
5.It initializes the movie data and filtered movies when the component mounts using the useEffect hook.
6.Another useEffect hook updates the filtered movies whenever filter options or movie data change.
7.There's a function handleFilterChange to update filter state variables.
8.In the JSX code, it renders a heading for the movie catalog, the FilterOptions component to filter movies, and the MovieList component to display filtered movies.

