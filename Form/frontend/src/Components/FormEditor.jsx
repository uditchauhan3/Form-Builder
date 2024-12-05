import React, { useState } from "react";
import axios from "axios";

const FormEditor = () => {
  const [title, setTitle] = useState("");
  const [headerImage, setHeaderImage] = useState(null);
  const [questions, setQuestions] = useState([]);

  const saveForm = async () => {
    try {
      const response = await axios.post(
        "https://form-builder-iota-five.vercel.app/api/forms",
        { title, headerImage, questions },
        { headers: { "Content-Type": "application/json" } }
      );
      alert(`Form saved successfully! ID: ${response.data.id}`);
    } catch (error) {
      console.error(error);
      alert("Failed to save the form.");
    }
  };

  return (
    <div className="container">
      <h1 className="text-2xl font-bold">Form Builder</h1>
      <input
        type="text"
        placeholder="Form Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="file"
        onChange={(e) => setHeaderImage(URL.createObjectURL(e.target.files[0]))}
        className="border p-2 mb-2 w-full"
      />
      <button
        onClick={saveForm}
        className="bg-blue-500 text-white p-2 rounded mt-4"
      >
        Save Form
      </button>
    </div>
  );
};

export default FormEditor;
