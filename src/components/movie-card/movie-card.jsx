import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {movieCardPropTypes} from "../../prop-types/movie-card.prop-types.js";


class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.handleMovieCardMouseOver = this.handleMovieCardMouseOver.bind(this);
  }

  render() {
    const {movieCard} = this.props;
    const {name, previewImage} = movieCard;
    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseOver={this.handleMovieCardMouseOver}
      >
        <div className="small-movie-card__image">
          <img src={previewImage} alt={name} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a
            className="small-movie-card__link"
            href="./movie-page"
          >
            {name}
          </a>
        </h3>
      </article>
    );
  }

  handleMovieCardMouseOver() {
    // console.log(this.props.setActiveCard);
    this.props.setActiveCard(this.props.movieCard);
  }
}

MovieCard.propTypes = {
  movieCard: movieCardPropTypes,
  setActiveCard: PropTypes.func,
};

export default MovieCard;
