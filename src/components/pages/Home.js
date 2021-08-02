import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from '../../redux/actions';
import PicsumCard from '../card/PicsumCard';

const Home = () => {

  const dispatch = useDispatch();
  const apiReducer = useSelector(store => store.apiReducer.arrayData)

  useEffect(() => {
   dispatch(fetchApi()); 
  }, []);


  return	(
    <>
      <PicsumCard apiReducer={apiReducer} />
    </>
    )
};

export default Home;
