import React, { FormEventHandler } from "react";

type TextFieldProps = {
  label?: string;
  type?: string;
  value?: string;
  classes?: string;
  placeholder?: string;
  name?: string;
  isBlock?: boolean;
  onchange?: FormEventHandler<HTMLInputElement>;
};
export default function TextField({
  label = "",
  type = "text",
  value = "",
  classes = "",
  placeholder = "",
  name = "",
  isBlock = false,
  onchange = () => {},
  ...rest
}: TextFieldProps) {
  return (
    <div className={`form-control ${isBlock ? "block" : ""}`}>
      {label && <label>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onchange}
        className={classes}
        placeholder={placeholder}
        name={name}
        {...rest}
      />
    </div>
  );
}
