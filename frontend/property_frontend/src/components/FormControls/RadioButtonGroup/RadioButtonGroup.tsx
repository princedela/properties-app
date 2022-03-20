import React from "react";
import "./radio-button-group.css";

interface RadioButtonGroupProps {
  name: string;
  labels: string[];
}

export default function RadioButtonGroup({
  name = "",
  labels = [],
}: RadioButtonGroupProps) {
  return (
    <div className="form-control rbg">
      {labels.map((label, index) => (
        <label htmlFor={name + index} key={index}>
          <input type="radio" name={name} id={name + index} /> {label}
          <span className="check-widget"></span>
        </label>
      ))}
    </div>
  );
}
