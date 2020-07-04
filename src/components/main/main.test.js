import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const moviesList = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

const movieCardHead = {
  title: `The Grand Budapest Hotel`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  genre: `Drama`,
  year: `2014`
};

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      movieCardHead={movieCardHead}
      moviesList={moviesList}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
