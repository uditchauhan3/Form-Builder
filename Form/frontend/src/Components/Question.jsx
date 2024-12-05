import React, { useState } from 'react';
import axios from 'axios';

const FormEditor = () => {
  const [title, setTitle] = useState('');
  const [headerImage, setHeaderImage] = useState('');
  const [questions, setQuestions] = useState([]);

  const addQuestion = (type) => {
    setQuestions([...questions, { type, data: {}, image: '' }]);
  };

  const saveForm = async () => {
    try {
      const response = await axios.post('http://localhost:5001/api/forms', {
        title,
        headerImage,
        questions,
      });
      alert(`Form saved! ID: ${response.data._id}`);
    } catch (error) {
      console.error(error);
      alert('Failed to save form');
    }
  };

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Form Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <button onClick={() => addQuestion('Categorize')} className="bg-blue-500 p-2 rounded">Add Categorize</button>
      <button onClick={() => addQuestion('Cloze')} className="bg-green-500 p-2 rounded">Add Cloze</button>
      <button onClick={() => addQuestion('Comprehension')} className="bg-yellow-500 p-2 rounded">Add Comprehension</button>
      <button onClick={saveForm} className="bg-purple-500 p-2 rounded">Save Form</button>
    </div>
  );
};

export default FormEditor;
