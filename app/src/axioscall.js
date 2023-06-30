import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'https://www.jsonkeeper.com/b/MDXW';

function GetComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {data ? (
        <div>
          {data.map((menuItem, index) => (
            <div key={index}>
              <h3>{menuItem.title}</h3>
              <p>Cuisine: {menuItem.cuisine_type}</p>
              <p>Category: {menuItem.category}</p>
              <p>Description: {menuItem.description}</p>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}//hello

export default GetComponent;
