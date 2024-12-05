import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FormPreview = ({ formId }) => {
  const [form, setForm] = useState(null);

  useEffect(() => {
    axios
      .get(`https://form-builder-iota-five.vercel.app/api/forms/${formId}`)
      .then((res) => setForm(res.data))
      .catch((err) => console.error(err));
  }, [formId]);

  if (!form) {
    return <div className="text-center py-8 text-gray-500">Loading form...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 shadow-lg rounded-lg">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
        {form.title}
      </h1>
      {form.headerImage && (` `
        <img
          src={form.headerImage}
          alt="Header"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}
      <div>
        {form.questions.map((q, index) => (
          <div
            key={index}
            className="border border-gray-200 p-6 rounded-lg bg-white shadow-sm mb-4"
          >
            <h2 className="font-semibold text-gray-700">{q.type} Question</h2>
            <p className="text-gray-500 italic">Details about the question...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormPreview;
