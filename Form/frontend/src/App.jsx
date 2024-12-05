import React from 'react';
import FormEditor from './Components/FormEditor';
import axios from 'axios';

const App = () => {
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Replace with your actual backend API endpoint
  //       const response = await axios.get('https://form-builder-iota-five.vercel.app/api/forms', {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         withCredentials: true // If you're using credentials
  //       });
  //       setData(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       setError(error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error loading data: {error.message}</div>;

  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 min-h-screen flex items-center justify-center">
      <FormEditor />
    </div>
  );
};

export default App;