import React from "react";
import "./Form.css";
import closeIcon from "./download.png";

const Form = ({ formData, onChange, onCancel, onSubmit }) => {
  return (
    <div className="form-container">
      <div className="header">
        <div className="icon-title">
          <h2>Add Lead</h2>
        </div>
        <div className="close-icon" onClick={onCancel}>
          <img src={closeIcon} alt="Close Icon" />
        </div>
      </div>

      <div className="box">
        <form onSubmit={onSubmit}>
          {Object.keys(formData).map((key) => (
            <div className="form-group" key={key}>
              <label>{formData[key].label}:</label>
              <input
                type={formData[key].type}
                value={formData[key].value}
                placeholder={formData[key].placeholder}
                onChange={(e) => onChange(key, e.target.value)}
              />
            </div>
          ))}

          <div className="button-group">
            <button type="button" className="cancel-btn" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="save-btn">
              Save & Add New
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
