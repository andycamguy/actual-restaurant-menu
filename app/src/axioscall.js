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
          <div>ID: {data.id}</div>
          <div>Title: {data.title}</div>
          <div>Cuisine Type: {data.cuisine_type}</div>
          <div>Category: {data.category}</div>
          <div>Description: {data.description}</div>
          <div>Price: {data.price}</div>
          <div>Spicy Level: {data.spicy_level}</div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default GetComponent;
