import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Appetizers from './Appetizers'; // Import the Appetizers component

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
    <div>
      {/* Pass the data to the Appetizers component */}
      <Appetizers data={data} />
    </div>
  );
}

export default GetComponent;
