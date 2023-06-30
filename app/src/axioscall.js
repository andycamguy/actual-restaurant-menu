import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'https://www.jsonkeeper.com/b/MDXW';

function GetComponent() {
  // Declare a state variable to store the fetched data
  const [data, setData] = useState(null);

  // useEffect hook to fetch the data when the component mounts
  useEffect(() => {
    fetchData(); // Call the fetchData function
  }, []);

  // Function to fetch the data from the API
  const fetchData = async () => {
    try {
      // Make an HTTP GET request to the API endpoint
      const response = await axios.get(API_URL);

      // Store the fetched data in the state variable
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // JSX code to render the fetched data
  return (
    <>
      {/* Conditionally render the fetched data if it is available */}
      {data && (
        <div>
          {/* Render the individual properties of the data object */}
          <div>ID: {data.id}</div>
          <div>Title: {data.title}</div>
          <div>Cuisine Type: {data.cuisine_type}</div>
          <div>Category: {data.category}</div>
          <div>Description: {data.description}</div>
          <div>Price: {data.price}</div>
          <div>Spicy Level: {data.spicy_level}</div>
        </div>
      )}
    </>
  );
}

export default GetComponent;
