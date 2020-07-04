import PropTypes from "prop-types";

export const movieCardPropTypes = PropTypes.shape({
  // photos: PropTypes.arrayOf(
  //     PropTypes.string
  // ),
  // city: PropTypes.string,
  title: PropTypes.string.isRequired,
});
