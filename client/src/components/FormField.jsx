import React from "react";
const FormField = ({
  labelname,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div className="form-container">
      <div>
        <label className="form-label" htmlFor={name}>
          {labelname}
        </label>
        {isSurpriseMe && (
          <button
            className="surprise-btn"
            type="button"
            onClick={handleSurpriseMe}
          >
            Surprise Me
          </button>
        )}
      </div>
      
    </div>
  );
};

export default FormField;
