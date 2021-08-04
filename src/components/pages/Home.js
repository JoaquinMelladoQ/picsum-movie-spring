import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "../../redux/actions";
import PicsumCard from "../card/picsum/PicsumCard";

const Home = () => {

  const dispatch = useDispatch();
  const apiReducer = useSelector(store => store.apiReducer.arrayData)

  const getUrlFromApi = () => {
    const data = apiReducer;
    const urlData = data.reduce((types, arr) => {
      return [ ...types, ...arr.download_url ]
    }, [])

    const joinedData = urlData.join('');
    const resultOnceJoined = new Array(joinedData);

    const cleanArray = [];
    resultOnceJoined[0]
      .split('https://')
      .map(element => cleanArray.push(`https:${element}`))

    cleanArray.shift()
    return cleanArray;
  };


  useEffect(() => {
   dispatch(fetchApi()); 
  }, []);


  return	(
    <>
      <PicsumCard 
        getUrlFromApi={getUrlFromApi}
      />
    </>
  )
};

export default Home;
