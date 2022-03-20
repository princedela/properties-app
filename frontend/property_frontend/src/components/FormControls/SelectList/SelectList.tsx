import React from "react";

type SelectListProps = {
  label?: string;
  value?: string;
  classes?: string;
  placeholder?: string;
  name?: string;
  onchange?: React.ChangeEventHandler<HTMLSelectElement>;
  options?: any[];
};

export default function SelectList({
  label = "",
  value = "",
  classes = "",
  placeholder = "",
  name = "",
  options = [],
  onchange = () => {},
  ...rest
}: SelectListProps) {
  return (
    <div className="form-control">
      {label && <label>{label}</label>}
      <select
        value={value}
        onChange={onchange}
        className={classes}
        name={name}
        {...rest}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map(({ name, value }, index) => (
          <option key={index} value={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}
