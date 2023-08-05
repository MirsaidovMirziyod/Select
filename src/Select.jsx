import React, { useState } from "react";
import "./Select.css";

const Select = ({ options, placeholder }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  const toggleOptions = () => {
    setShowOptions((prevState) => !prevState);
  };

  return (
    <div className="custom-select">
      <div className="select-display" onClick={toggleOptions}>
        <span className="placeholder">
          {selectedOption ? selectedOption.title : placeholder}
        </span>
        <span className={`selected-value ${showOptions ? "up" : "down"}`}>
          {selectedOption && selectedOption.title}
        </span>
      </div>
      {showOptions && (
        <div className="options">
          {options.map((option) => (
            <div
              key={option.value}
              className="option"
              onClick={() => handleOptionClick(option)}
            >
              {option.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
