import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const moviesList = [
  {
    name: `Bohemian Rhapsody`,
    previewImage: `img/bohemian-rhapsody.jpg`,
  },
  {
    name: `Macbeth`,
    previewImage: `img/macbeth.jpg`,
  },
  {
    name: `Aviator`,
    previewImage: `img/aviator.jpg`,
  },
  {
    name: `We need to talk about Kevin`,
    previewImage: `img/we-need-to-talk-about-kevin.jpg`,
  },
  {
    name: `Pulp Fiction`,
    previewImage: `img/pulp-fiction.jpg`,
  },
  {
    name: `No Country for Old Men`,
    previewImage: `img/no-country-for-old-men.jpg`,
  },
  {
    name: `Snatch`,
    previewImage: `img/snatch.jpg`,
  },
  {
    name: `War of the Worlds`,
    previewImage: `img/war-of-the-worlds.jpg`,
  }
];
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
