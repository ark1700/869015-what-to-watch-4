import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import moviesList from "./mocks/films.js";

ReactDOM.render(
    <App moviesList={moviesList}/>,
    document.querySelector(`#root`)
);

