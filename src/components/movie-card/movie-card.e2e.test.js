import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";

const moviesCard = {
  id: 1,
  name: `The Grand Budapest Hotel`,
  posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
  previewImage: `img/the-grand-budapest-hotel-poster.jpg`,
  backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
  backgroundColor: `#ffffff`,
  videoLink: `https://some-link`,
  previewVideoLink: `https://some-link`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  rating: 10,
  scoresCount: 240,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  runTime: 99,
  genre: `Comedy`,
  released: 2014,
  isFavorite: false
};

Enzyme.configure({
  adapter: new Adapter(),
});

jest.useFakeTimers();

describe(`MovieCard group`, () => {
  const setActiveCard = jest.fn();

  const smallMovieCard = shallow(
      <MovieCard
        movieCard={moviesCard}
        setActiveCard={setActiveCard}
      />
  );

  it(`MovieCard mouseenter event is correctly changes state`, () => {
    smallMovieCard.simulate(`mouseenter`);
    expect(setActiveCard.mock.calls.length).toBe(1);
    jest.advanceTimersByTime(1001);
    expect(smallMovieCard.state().isPlaying).toEqual(true);
  });

  it(`MovieCard mouseleave event is correctly changes state`, () => {
    smallMovieCard.simulate(`mouseleave`);
    expect(smallMovieCard.state().isPlaying).toBe(false);
  });
});
