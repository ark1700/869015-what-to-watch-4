import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieList from "./movie-list";

const moviesList = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title link be pressed`, () => {
  const onTitleLinkClick = jest.fn();

  const movieList = shallow(
      <MovieList
        moviesList={moviesList}
        movieCardTitleHandler={onTitleLinkClick}
      />
  );

  const titleLink = movieList.find(`a.small-movie-card__link`).first();

  titleLink.props().onClick();

  expect(onTitleLinkClick.mock.calls.length).toBe(1);
});
