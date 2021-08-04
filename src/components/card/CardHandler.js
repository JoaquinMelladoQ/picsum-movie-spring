import React from "react";
import MovieCard from "./movie/MovieCard";


const CardHandler = ({ movies }) => {

  const getImagesFromLib = () => {
    const urlImages = movies.reduce((url, image) => {
      return [ ...url, image.posterurl ]
    }, []) 
    
    const joined = urlImages.join('');
    const resultOnceJoined = new Array(joined);

    const newArray = [];
    resultOnceJoined[0]
      .split('https://')
      .map(element => newArray.push(`https:${element}`))

    newArray.shift()
    return newArray 
  };


  return (
    <>
      <MovieCard 
        getImagesFromLib={getImagesFromLib}
      />
    </>
  )
};

export default CardHandler;
