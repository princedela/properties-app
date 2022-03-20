import React, { ChangeEventHandler } from "react";

type TextFieldProps = {
  label?: string;
  value?: string;
  classes?: string;
  placeholder?: string;
  name?: string;
  rows?: number;
  onchange?: ChangeEventHandler<HTMLTextAreaElement>;
};
export default function TextArea({
  label = "",
  value = "",
  classes = "",
  placeholder = "",
  name = "",
  rows = 5,
  onchange = () => {},
  ...rest
}: TextFieldProps) {
  return (
    <div className="form-control">
      {label && <label>{label}</label>}
      <textarea
        value={value}
        onChange={onchange}
        className={classes}
        placeholder={placeholder}
        name={name}
        rows={rows}
        {...rest}
      ></textarea>
    </div>
  );
}
