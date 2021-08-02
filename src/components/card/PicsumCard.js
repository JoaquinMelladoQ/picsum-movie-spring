import React, { useState, useEffect } from "react";

const PicsumCard = ({ apiReducer }) => {
  const [url, setUrl] = useState([]);
  
  const data = apiReducer;
  const urlData = data.reduce((types, arr) => {
    return [ ...types, ...arr.download_url ]
  }, [])

  const joinedData = urlData.join('');
  const result = new Array(joinedData);
  const finalData = 
    result.reduce((acc, val) => acc + val);
  console.log(finalData);


  //const urlSetted = new Set(urlData);
  //setUrl(urlSetted)
  //console.log(url);

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
