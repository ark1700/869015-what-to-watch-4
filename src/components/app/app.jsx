import React from "react";
import Main from "../main/main.jsx";
// import PropTypes from "prop-types";
import {moviesListPropTypes} from "../../prop-types/movies-list.prop-types.js";

const App = (props) => {
  const movieCardHead = {
    title: `The Grand Budapest Hotel`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Drama`,
    year: `2014`
  };

  return (
    <Main
      movieCardHead={movieCardHead}
      moviesList={props.moviesList}
    />
  );
};

App.propTypes = {
  moviesList: moviesListPropTypes,
};

export default App;
