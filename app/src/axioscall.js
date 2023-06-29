import React, { useEffect } from 'react';
import axios from 'axios';

function GetComponent() {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://www.jsonkeeper.com/b/MDXW');
      console.log(response.data); // You can access the response data here
    } catch (error) {
      console.error(error);
    }
  };

  // Your component JSX and other code

  return (
   fetchData // JSX for your component
  );
}

export default GetComponent;
