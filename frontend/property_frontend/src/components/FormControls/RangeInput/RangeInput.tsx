import React from "react";
import "./range-input.css";

export default function RangeInput({
  label = "",
  placeholder1 = "Min",
  placeholder2 = "Max",
}) {
  return (
    <div className="form-control">
      {label.length && <label>{label}</label>}
      <div className="range-input">
        <input type="number" placeholder={placeholder1} />
        -
        <input type="number" placeholder={placeholder2} />
      </div>
    </div>
  );
}
