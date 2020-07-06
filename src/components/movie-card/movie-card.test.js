import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";

const movieCard = {
  name: `Bohemian Rhapsody`,
  previewImage: `img/bohemian-rhapsody.jpg`,
};

it(`Render Main`, () => {
  const tree = renderer
    .create(<MovieCard
      movieCard={movieCard}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
