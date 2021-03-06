import PropTypes from "prop-types";

export const movieCardPropTypes = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  previewImage: PropTypes.string,
  posterImage: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundColor: PropTypes.string,
  videoLink: PropTypes.string,
  previewVideoLink: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.number,
  scoresCount: PropTypes.number,
  director: PropTypes.string,
  starring: PropTypes.arrayOf(
      PropTypes.string
  ),
  runTime: PropTypes.number,
  genre: PropTypes.string,
  released: PropTypes.number,
  isFavorite: PropTypes.bool
});
