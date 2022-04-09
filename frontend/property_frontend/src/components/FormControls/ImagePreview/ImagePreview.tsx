import React from "react";

export default function ImagePreview({ classNames = "", name = "" }) {
  return (
    <div className={"img-preview " + classNames}>
      <label className="change-button" htmlFor={name}>
        <input type="file" name={name} id={name} />
      </label>
    </div>
  );
}
