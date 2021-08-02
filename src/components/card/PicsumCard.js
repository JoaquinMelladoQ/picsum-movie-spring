import React, { useState, useEffect } from "react";

const PicsumCard = ({ apiReducer }) => {
  const [url, setUrl] = useState([]);
  
  const data = apiReducer;
    const urlData = data.reduce((types, urlArray) => {
      return [ ...types, ...urlArray.download_url ]
    }, [])
  console.log(urlData);




//  const mapData = (
    //<ul>
      //{data.map((item) =>
      //<li key={item.id}>
        //{item.download_url}
      //</li>
      //)}
    //</ul>
  //);
  //console.log(mapData);

  //const reduced = data.map((curr) => curr)
  //console.log(reduced);

  //const objectData = Object.entries(data)
  //console.log(objectData);
  //const objectKeys = Object.keys(data);
  //console.log(objectKeys);
  


  return	(
      <div>
        <p>Body</p>
      </div>
    )
};

export default PicsumCard;
