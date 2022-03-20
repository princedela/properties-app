import React from "react";
import "./checkbox.css";

export default function CheckBoxInput({ label = "", name = "", id = "" }) {
  return (
    <div className="form-control cbx">
      <label>
        <input type="checkbox" id={id} name={name} /> {label}
        <span className="cbx-widget"></span>
      </label>
    </div>
  );
}
