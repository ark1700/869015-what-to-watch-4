import PropTypes from "prop-types";

export const movieCardPropTypes = PropTypes.exact({
  name: PropTypes.string,
  previewImage: PropTypes.string,
}).isRequired;
