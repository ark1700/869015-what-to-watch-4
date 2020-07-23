import React, {PureComponent} from "react";
import {movieCardPropTypes} from "../../prop-types/movie-card.prop-types";
import {reviewsPropTypes} from "../../prop-types/reviews.prop-types";

import {TABS, getRatingLevel, formatTime} from "../../utils.js";
import moment from 'moment';

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      tab: TABS.OVERVIEW,
    };

    this._tabsContent = this._tabsContent.bind(this);
    this._tabsNav = this._tabsNav.bind(this);
    this.tabsClickHandler = this.tabsClickHandler.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        {this._tabsNav()}
        {this._tabsContent()}
      </React.Fragment>
    );
  }

  _tabsNav() {
    const tabState = this.state.tab;
    return (
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {
            Object.values(TABS).map((tab, i) => {
              const isActive = tab === tabState;
              return (
                <li
                  key={i}
                  className={`movie-nav__item ${isActive ? `movie-nav__item--active` : ``}`}
                >
                  <a
                    href="#"
                    className="movie-nav__link"
                    onClick={(evt) => {
                      evt.preventDefault();
                      if (!isActive) {
                        this.tabsClickHandler(tab);
                      }
                    }}
                  >{tab}</a>
                </li>
              );
            })
          }
        </ul>
      </nav>
    );
  }

  _tabsContent() {
    const {moviePage, reviews} = this.props;
    const tab = this.state.tab;
    const {name, posterImage, backgroundImage, backgroundColor, genre, released, isFavorite, rating, scoresCount, description, director, starring, runTime} = moviePage;

    switch (tab) {
      case TABS.DETAILS:
        return (
          <div className="movie-card__text movie-card__row">
            <div className="movie-card__text-col">
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Director</strong>
                <span className="movie-card__details-value">{director}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Starring</strong>
                <span className="movie-card__details-value">
                  {starring.join(`, \n`)}
                </span>
              </p>
            </div>

            <div className="movie-card__text-col">
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Run Time</strong>
                <span className="movie-card__details-value">{formatTime(runTime)}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Genre</strong>
                <span className="movie-card__details-value">{genre}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Released</strong>
                <span className="movie-card__details-value">{released}</span>
              </p>
            </div>
          </div>
        );

      case TABS.REVIEWS:

        return (
          <div className="movie-card__reviews movie-card__row">
            <div className="movie-card__reviews-col">
              {reviews.map((review, i) => {
                return (
                  <div key={i} className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">{review.comment}</p>
                      <footer className="review__details">
                        <cite className="review__author">{review.user.name}</cite>
                        <time className="review__date" dateTime={moment(review.date).format(`MMMM DD, YYYY`)}>{moment(review.date).format(`MMMM DD, YYYY`)}</time>
                      </footer>
                    </blockquote>
                    <div className="review__rating">{review.rating.toFixed(1).toString().replace(`.`, `,`)}</div>
                  </div>
                );
              })}
            </div>
          </div>
        );

      default:
        return (
          <React.Fragment>
            <div className="movie-rating">
              <div className="movie-rating__score">{rating}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">{getRatingLevel(rating)}</span>
                <span className="movie-rating__count">{scoresCount} ratings</span>
              </p>
            </div>
            <div className="movie-card__text">
              <p>{description}</p>

              <p className="movie-card__director"><strong>Director: {director}</strong></p>

              <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)} and other</strong></p>
            </div>
          </React.Fragment>
        );
    }
  }

  tabsClickHandler(activeTab) {
    this.setState({tab: activeTab});
  }
}

Tabs.propTypes = {
  moviePage: movieCardPropTypes,
  reviews: reviewsPropTypes,
};

export default Tabs;
