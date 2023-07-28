import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'https://8000-andycamguy-backendbistr-2lmgpmk67vm.ws-us102.gitpod.io/bistro/bistro_items';

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
