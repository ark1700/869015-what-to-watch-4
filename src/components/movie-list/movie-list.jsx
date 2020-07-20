import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";
import {moviesListPropTypes} from "../../prop-types/movies-list.prop-types";

class MoviesList extends PureComponent {
  // eslint-disable-next-line react/prop-types
  constructor(props) {
    super(props);
  }

  render() {
    const {moviesList, setActiveCard} = this.props;
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
  }
}

MoviesList.propTypes = {
  moviesList: moviesListPropTypes,
  setActiveCard: PropTypes.func,
};

export default MoviesList;
