import React from "react";
import PropTypes from "prop-types";
import {moviesListPropTypes} from "../../prop-types/movies-list.prop-types";

const MoviesList = (props) => {
  // eslint-disable-next-line react/prop-types
  const {moviesList, movieCardTitleHandler} = props;
  return (
    <div className="catalog__movies-list">
      {moviesList
        // eslint-disable-next-line react/prop-types
        .map((movieCard, i) => {
          return (
            <article className="small-movie-card catalog__movies-card" key={`movie-card-` + i}>
              <div className="small-movie-card__image">
                <img src="img/macbeth.jpg" alt={movieCard} width="280" height="175" />
              </div>
              <h3 className="small-movie-card__title">
                <a
                  className="small-movie-card__link"
                  href="movie-page.html"
                  onClick={movieCardTitleHandler}
                >
                  {movieCard}
                </a>
              </h3>
            </article>
          );
        })}
    </div>
  );
};

MoviesList.propTypes = {
  moviesList: moviesListPropTypes,
  movieCardTitleHandler: PropTypes.func,
};

export default MoviesList;
