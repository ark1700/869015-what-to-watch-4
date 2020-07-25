import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

class GenresList extends PureComponent {
  // eslint-disable-next-line react/prop-types
  constructor(props) {
    super(props);
  }

  render() {
    const {genres, filterType, onFilterClick} = this.props;
    return (
      <ul className="catalog__genres-list">
        {genres.map((genre, i) => {
          return (
            <li
              className={`catalog__genres-item ${filterType === genre ? `catalog__genres-item--active` : ``}`}
              key={i}
            >
              <a
                href="#"
                className="catalog__genres-link"
                onClick={(evt) => {
                  evt.preventDefault();
                  if (filterType !== genre) {
                    onFilterClick(genre);
                  }
                }}
              >{genre}</a>
            </li>
          );
        })}
      </ul>
    );
  }
}

GenresList.propTypes = {
  genres: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired,
  filterType: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filterType: state.filterType,
  genres: state.genres
});

const mapDispatchToProps = (dispatch) => ({
  onFilterClick(filterType) {
    dispatch(ActionCreator.changeGenreFilter(filterType));
    dispatch(ActionCreator.getFilteredMovieCards());
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
