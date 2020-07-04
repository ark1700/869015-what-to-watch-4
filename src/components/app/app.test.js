import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const moviesList = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      moviesList={moviesList}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
