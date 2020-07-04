import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./movie-list.jsx";

const moviesList = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

it(`Render Main`, () => {
  const tree = renderer
    .create(<MovieList
      moviesList={moviesList}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
