import React, { useState, useEffect } from "react";

const PicsumCard = ({ apiReducer }) => {
  const [url, setUrl] = useState([]);
  
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

  console.log(cleanArray);
  



  useEffect(() => {
    //setUrl(urlSetted)
    //console.log(urlSetted);
  }, []);

  return	(
      <div>
        <p>Body</p>
      </div>
    )
};

export default PicsumCard;
