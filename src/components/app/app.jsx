import React from "react";
import Main from "../main/main.jsx";


const App = () => {
  const movieCardHead = {
    title: `The Grand Budapest Hotel`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Drama`,
    year: `2014`
  };

  return (
    <Main movieCardHead={movieCardHead}/>
  );
};


export default App;
