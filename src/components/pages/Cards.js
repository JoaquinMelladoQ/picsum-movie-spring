import React from "react";
import CardHandler from "../card/CardHandler";
import movies from "../../lib/movies";

const Cards = () => {
  return	(
    <>
      <CardHandler 
        movies={movies}
      />
    </>
  )
};

export default Cards;
