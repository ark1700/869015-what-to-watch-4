import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";

const moviesList = {
  name: `Bohemian Rhapsody`,
  previewImage: `img/bohemian-rhapsody.jpg`,
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should mouse over movie card`, () => {
  const setActiveCard = jest.fn();

  const movieList = shallow(
      <MovieCard
        movieCard={moviesList}
        setActiveCard={setActiveCard}
      />
  );

  const titleLink = movieList.find(`.small-movie-card`).first();

  titleLink.props().onMouseOver();

  expect(setActiveCard.mock.calls.length).toBe(1);
});
