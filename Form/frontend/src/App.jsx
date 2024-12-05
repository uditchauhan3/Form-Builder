import React, {useEffect} from 'react';
import FormEditor from './Components/FormEditor';

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('https://form-builder-iota-five.vercel.app/'); // Replace `/endpoint` with your API path
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

const App = () => (
  <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 min-h-screen flex items-center justify-center">
    <FormEditor />
  </div>
);


export default App;
