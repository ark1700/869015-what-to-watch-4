const SIMILAR_FILMS_COUNT = 4;

const RatingLevel = {
  BAD: 0,
  NORMAL: 3,
  GOOD: 5,
  VERY_GOOD: 8,
  AWESOME: 10
};

const TABS = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

const getRatingLevel = (ratingScore) => {
  if (ratingScore >= RatingLevel.BAD && ratingScore < RatingLevel.NORMAL) {
    return `Bad`;
  } else if (ratingScore >= RatingLevel.NORMAL && ratingScore < RatingLevel.GOOD) {
    return `Normal`;
  } else if (ratingScore >= RatingLevel.GOOD && ratingScore < RatingLevel.VERY_GOOD) {
    return `Good`;
  } else if (ratingScore >= RatingLevel.VERY_GOOD && ratingScore < RatingLevel.AWESOME) {
    return `Very good`;
  } else if (ratingScore >= RatingLevel.AWESOME) {
    return `Awesome`;
  }
  return ``;
};

const formatTime = (min) => {
  const hours = (min / 60);
  const minutes = (hours - Math.floor(hours)) * 60;

  return `${Math.floor(hours)}h ${Math.round(minutes)}m`;
};

export {TABS, SIMILAR_FILMS_COUNT, getRatingLevel, formatTime};
