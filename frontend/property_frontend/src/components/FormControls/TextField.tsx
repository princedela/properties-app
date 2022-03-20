import React, { FormEventHandler } from "react";

type TextFieldProps = {
  label?: string;
  type?: string;
  value?: string;
  classes?: string;
  placeholder?: string;
  name?: string;
  onchange?: FormEventHandler<HTMLInputElement>;
};
export default function TextField({
  label = "",
  type = "text",
  value = "",
  classes = "",
  placeholder = "",
  name = "",
  onchange = () => {},
  ...rest
}: TextFieldProps) {
  return (
    <div className="form-control">
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
