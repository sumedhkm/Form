import React from "react";
import "./Form.css"; 

const Form = () => {
  return (
    <div className="form-container">
      <h2>Add Lead</h2>
      <div className="box">
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter the Name" />

        <label>Mobile:</label>
        <input type="text" placeholder="Enter the Mobile" />

        <label>Email id:</label>
        <input type="email" placeholder="Enter the Email" />

        <label>Source:</label>
        <input type="text" placeholder="Enter the Source" />

        <label>Date:</label>
        <input type="text" placeholder="Enter the date" />

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
