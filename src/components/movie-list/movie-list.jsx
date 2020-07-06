import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";
import {moviesListPropTypes} from "../../prop-types/movies-list.prop-types";

const MoviesList = (props) => {
  // eslint-disable-next-line react/prop-types
  const {moviesList, setActiveCard} = props;
  return (
    <div className="catalog__movies-list">
      {moviesList
        .map((movieCard, i) => {
          return (
            <MovieCard
              key={`card-` + i}
              movieCard={movieCard}
              setActiveCard={setActiveCard}
            />
          );
        })}
    </div>
  );
};

MoviesList.propTypes = {
  moviesList: moviesListPropTypes,
  setActiveCard: PropTypes.func,
};

export default MoviesList;
