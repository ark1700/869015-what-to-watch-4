import PropTypes from "prop-types";
import {movieCardPropTypes} from "./movie-card.prop-types.js";

export const moviesListPropTypes = PropTypes.arrayOf(
    movieCardPropTypes
).isRequired;
