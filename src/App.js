import React, { useState } from "react";
import Form from "./Form";

const App = () => {
  const [formData, setFormData] = useState({
    name: { label: "Full Name", type: "text", value: "" },
    mobile: { label: "Mobile Number", type: "number", value: ""},
    email: { label: "Email Address", type: "email", value: "" },
    source: { label: " Source", type: "text", value: "" },
    date: { label: " Date", type: "text", value: "" },
  });

  const handleChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: { ...prevData[key], value },
    }));
  };

  const handleSubmit = () => {
    alert(" Added successful");
    console.log("Form Submitted:", formData);
    handleCancel();
  };

  const handleCancel = () => {
    setFormData((prevData) =>
      Object.keys(prevData).reduce((acc, key) => {
        acc[key] = { ...prevData[key], value: "" };
        return acc;
      }, {})
    );
  };

  return (
    <div className="app-container">
      <Form formData={formData} onChange={handleChange} onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
};

export default App;
