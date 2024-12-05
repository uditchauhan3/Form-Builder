import React, { useState, useEffect } from 'react';
import FormEditor from './Components/FormEditor';
import axios from 'axios'; // Import Axios if you're using it

const App = () => {
  const [data, setData] = useState(null); // State to store the fetched data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://form-builder-iota-five.vercel.app/api/forms'); // Fixed endpoint
        setData(response.data); // Store the response data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 min-h-screen flex items-center justify-center">
      <FormEditor data={data} /> {/* Pass data to FormEditor if needed */}
    </div>
  );
};

export default App;
