import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import PropTypes from "prop-types";
import {moviesListPropTypes} from "../../prop-types/movies-list.prop-types.js";
import reviews from "../../mocks/reviews.js";
import films from "../../mocks/films.js";
import {SIMILAR_FILMS_COUNT} from "../../utils.js";

const movieCardHead = {
  title: `The Grand Budapest Hotel`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  genre: `Drama`,
  year: `2014`
};

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: {
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
      }
    };

    this.setActiveCard = this.setActiveCard.bind(this);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main
              movieCardHead={movieCardHead}
              moviesList={this.props.moviesList}
              setActiveCard={this.setActiveCard}
            />
          </Route>
          <Route exact path="/movie-page">
            <MoviePage
              moviePage={this.state.activeCard}
              reviews={reviews}
              similarFilms={films.slice(-SIMILAR_FILMS_COUNT)}
              setActiveCard={() => {}}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  setActiveCard(placeItem) {
    this.setState({activeCard: placeItem});
  }
}

App.propTypes = {
  moviesList: moviesListPropTypes,
  setActiveCard: PropTypes.func,
};

export default App;
