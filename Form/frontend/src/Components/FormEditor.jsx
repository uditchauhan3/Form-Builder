import React, { useState } from "react";
import axios from "axios";

const FormEditor = () => {
  const [title, setTitle] = useState("");
  const [headerImage, setHeaderImage] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [showCategorize, setShowCategorize] = useState(false);
  const [showCloze, setShowCloze] = useState(false);
  const [showComprehension, setShowComprehension] = useState(false);
  const [categorizeData, setCategorizeData] = useState({ question: "", categories: "", items: "" });
  const [clozeData, setClozeData] = useState({ passage: "", blanks: "" });
  const [comprehensionData, setComprehensionData] = useState({ passage: "", questions: "" });

  const addQuestion = (questionType, questionData) => {
    const newQuestion = { type: questionType, data: questionData, image: "" };
    setQuestions([...questions, newQuestion]);
  };

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
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #f7f7fa, #ece9f1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "1rem",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "800px",
          padding: "2rem",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "600",
            textAlign: "center",
            color: "#4a4e69",
            marginBottom: "1.5rem",
          }}
        >
          Advanced Form Builder
        </h1>

        {/* Form Title Input */}
        <div style={{ marginBottom: "1.5rem" }}>
          <label
            style={{
              display: "block",
              fontSize: "1rem",
              fontWeight: "500",
              marginBottom: "0.5rem",
              color: "#4a4e69",
            }}
          >
            Form Title
          </label>
          <textarea
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            rows="2"
            style={{
              width: "100%",
              padding: "0.75rem",
              fontSize: "1rem",
              border: "1px solid #ddd",
              borderRadius: "0.5rem",
              boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
              resize: "none",
            }}
            placeholder="Enter the title of your form..."
          />
        </div>

        {/* Header Image Upload */}
        <div style={{ marginBottom: "1.5rem" }}>
          <label
            style={{
              display: "block",
              fontSize: "1rem",
              fontWeight: "500",
              marginBottom: "0.5rem",
              color: "#4a4e69",
            }}
          >
            Header Image
          </label>
          <input
            type="file"
            onChange={(e) =>
              setHeaderImage(URL.createObjectURL(e.target.files[0]))
            }
            style={{
              display: "block",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              border: "1px solid #ccc",
              backgroundColor: "#f7f7fa",
              color: "#4a4e69",
            }}
          />
          {headerImage && (
            <div
              style={{
                marginTop: "1rem",
                borderRadius: "0.5rem",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img src={headerImage} alt="Header Preview" style={{ width: "100%" }} />
            </div>
          )}
        </div>

        {/* Button Section with Flex Layout */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1.5rem",
          }}
        >
          <button
            onClick={() => setShowCategorize(!showCategorize)}
            style={{
              padding: "1rem",
              backgroundColor: "#3498db",
              color: "white",
              border: "none",
              borderRadius: "0.5rem",
              cursor: "pointer",
              width: "30%",
            }}
          >
            Add Categorize Question
          </button>

          <button
            onClick={() => setShowCloze(!showCloze)}
            style={{
              padding: "1rem",
              backgroundColor: "#3498db",
              color: "white",
              border: "none",
              borderRadius: "0.5rem",
              cursor: "pointer",
              width: "30%",
            }}
          >
            Add Cloze Question
          </button>

          <button
            onClick={() => setShowComprehension(!showComprehension)}
            style={{
              padding: "1rem",
              backgroundColor: "#3498db",
              color: "white",
              border: "none",
              borderRadius: "0.5rem",
              cursor: "pointer",
              width: "30%",
            }}
          >
            Add Comprehension Question
          </button>
        </div>

        {/* Conditional Input Forms */}
        {showCategorize && (
          <div>
            <input
              type="text"
              placeholder="Enter the categorize question"
              value={categorizeData.question}
              onChange={(e) =>
                setCategorizeData({ ...categorizeData, question: e.target.value })
              }
              style={{
                width: "100%",
                padding: "0.75rem",
                fontSize: "1rem",
                border: "1px solid #ddd",
                borderRadius: "0.5rem",
                boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
                marginBottom: "1rem",
              }}
            />
            <input
              type="text"
              placeholder="Enter Categories (comma separated)"
              value={categorizeData.categories}
              onChange={(e) =>
                setCategorizeData({ ...categorizeData, categories: e.target.value })
              }
              style={{
                width: "100%",
                padding: "0.75rem",
                fontSize: "1rem",
                border: "1px solid #ddd",
                borderRadius: "0.5rem",
                boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
                marginBottom: "1rem",
              }}
            />
            <input
              type="text"
              placeholder="Enter Items (comma separated)"
              value={categorizeData.items}
              onChange={(e) =>
                setCategorizeData({ ...categorizeData, items: e.target.value })
              }
              style={{
                width: "100%",
                padding: "0.75rem",
                fontSize: "1rem",
                border: "1px solid #ddd",
                borderRadius: "0.5rem",
                boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
                marginBottom: "1rem",
              }}
            />
            <button
              onClick={() => {
                addQuestion("Categorize", categorizeData);
                setShowCategorize(false); // Hide after adding
              }}
              style={{
                padding: "1rem",
                backgroundColor: "#3498db",
                color: "white",
                border: "none",
                borderRadius: "0.5rem",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Add Categorize Question
            </button>
          </div>
        )}

        {showCloze && (
          <div>
            <input
              type="text"
              placeholder="Enter the passage"
              value={clozeData.passage}
              onChange={(e) =>
                setClozeData({ ...clozeData, passage: e.target.value })
              }
              style={{
                width: "100%",
                padding: "0.75rem",
                fontSize: "1rem",
                border: "1px solid #ddd",
                borderRadius: "0.5rem",
                boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
                marginBottom: "1rem",
              }}
            />
            <input
              type="text"
              placeholder="Enter blanks"
              value={clozeData.blanks}
              onChange={(e) =>
                setClozeData({ ...clozeData, blanks: e.target.value })
              }
              style={{
                width: "100%",
                padding: "0.75rem",
                fontSize: "1rem",
                border: "1px solid #ddd",
                borderRadius: "0.5rem",
                boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
                marginBottom: "1rem",
              }}
            />
            <button
              onClick={() => {
                addQuestion("Cloze", clozeData);
                setShowCloze(false); // Hide after adding
              }}
              style={{
                padding: "1rem",
                backgroundColor: "#3498db",
                color: "white",
                border: "none",
                borderRadius: "0.5rem",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Add Cloze Question
            </button>
          </div>
        )}

        {showComprehension && (
          <div>
            <input
              type="text"
              placeholder="Enter passage"
              value={comprehensionData.passage}
              onChange={(e) =>
                setComprehensionData({ ...comprehensionData, passage: e.target.value })
              }
              style={{
                width: "100%",
                padding: "0.75rem",
                fontSize: "1rem",
                border: "1px solid #ddd",
                borderRadius: "0.5rem",
                boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
                marginBottom: "1rem",
              }}
            />
            <input
              type="text"
              placeholder="Enter questions (comma separated)"
              value={comprehensionData.questions}
              onChange={(e) =>
                setComprehensionData({
                  ...comprehensionData,
                  questions: e.target.value,
                })
              }
              style={{
                width: "100%",
                padding: "0.75rem",
                fontSize: "1rem",
                border: "1px solid #ddd",
                borderRadius: "0.5rem",
                boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
                marginBottom: "1rem",
              }}
            />
            <button
              onClick={() => {
                addQuestion("Comprehension", comprehensionData);
                setShowComprehension(false); // Hide after adding
              }}
              style={{
                padding: "1rem",
                backgroundColor: "#3498db",
                color: "white",
                border: "none",
                borderRadius: "0.5rem",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Add Comprehension Question
            </button>
          </div>
        )}

        {/* Render Questions */}
        {questions.map((q, index) => (
          <div
            key={index}
            style={{
              padding: "1rem",
              backgroundColor: "#f7f7fa",
              marginBottom: "1rem",
              border: "1px solid #ddd",
              borderRadius: "0.5rem",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ fontWeight: "500", marginBottom: "0.5rem" }}>
              {q.type} Question
            </h3>
            <button
              onClick={() => {
                const updatedQuestions = questions.filter((_, i) => i !== index);
                setQuestions(updatedQuestions);
              }}
              style={{
                marginTop: "0.5rem",
                padding: "0.5rem",
                fontSize: "0.9rem",
                fontWeight: "500",
                color: "white",
                backgroundColor: "#d9534f",
                border: "none",
                borderRadius: "0.5rem",
                cursor: "pointer",
              }}
            >
              Remove Question
            </button>
          </div>
        ))}

        {/* Save Form */}
        <button
          onClick={saveForm}
          style={{
            width: "100%",
            padding: "0.75rem",
            fontSize: "1rem",
            fontWeight: "600",
            color: "white",
            backgroundColor: "#007bff",
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer",
            marginTop: "1rem",
          }}
        >
          Save Form
        </button>
      </div>
    </div>
  );
};

export default FormEditor;
