import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";
import {movieCardPropTypes} from "../../prop-types/movie-card.prop-types.js";


class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.handleMovieCardMouseEnter = this.handleMovieCardMouseEnter.bind(this);
    this.handleMovieCardMouseLeave = this.handleMovieCardMouseLeave.bind(this);

    this.state = {
      isPlaying: false,
      activeCard: null
    };

    this.timerId = null;
    this.PREVIEW_DELAY = 1000;
  }

  render() {
    const {movieCard} = this.props;
    const {name, previewImage, previewVideoLink} = movieCard;
    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this.handleMovieCardMouseEnter}
        onMouseLeave={this.handleMovieCardMouseLeave}
      >
        <div className="small-movie-card__image">
          {/* <img src={previewImage} alt={name} width="280" height="175" /> */}
          <VideoPlayer
            src={previewVideoLink}
            isPlaying={this.state.isPlaying}
            previewImage={previewImage}
            muted={true}
          />
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

  handleMovieCardMouseEnter() {
    this.props.setActiveCard(this.props.movieCard);

    this.timerId = setTimeout(()=> {
      this.setState({isPlaying: true});
    }, this.PREVIEW_DELAY);
  }

  handleMovieCardMouseLeave() {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.setState({isPlaying: false});
    }
  }
}

MovieCard.propTypes = {
  movieCard: movieCardPropTypes,
  setActiveCard: PropTypes.func,
};

export default MovieCard;
