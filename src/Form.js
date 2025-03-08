import React from "react";
import "./Form.css"; 
import closeIcon from "./download.png";


const Form = () => {
  return (
    <div className="form-container">
      <div className="header">
        <div className="icon-title">
          <h2>Add Lead</h2>
        </div>
        <div className="close-icon">
        <img src={closeIcon} alt="Close Icon" />
        </div>
      </div>

      <div className="box">
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Mobile:</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Email ID:</label>
            <input type="email"  />
          </div>

          <div className="form-group">
            <label>Source:</label>
            <input type="text"  />
          </div>

          <div className="form-group">
            <label>Date:</label>
            <input type="text" />
          </div>

          <div className="button-group">
            <button type="reset" className="cancel-btn">Cancel</button>
            <button type="submit" className="save-btn">Save & Add New</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
