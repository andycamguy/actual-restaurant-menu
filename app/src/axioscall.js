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
          <Appetizers data={data} />
        ) : (
          <div>Loading...</div>
        )}
      </>
    );
  } 

export default GetComponent;
