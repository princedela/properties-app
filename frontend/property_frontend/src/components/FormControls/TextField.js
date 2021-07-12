import React from "react";

export default function TextField({
  label,
  type = "text",
  value = "",
  classess = "",
  placeholder = "",
  onchange = () => {},
  ...rest
}) {
  return (
    <div className="form-control">
      {label && <label>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onchange}
        className={classess}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
}
