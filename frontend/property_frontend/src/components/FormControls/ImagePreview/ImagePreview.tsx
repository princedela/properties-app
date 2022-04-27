import React, { useState, ChangeEvent } from "react";

export default function ImagePreview({ classNames = "", name = "" }) {
  const [src, setSrc] = useState("");

  function onChangeFile(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (e.currentTarget.files?.length && e.currentTarget.files[0]) {
      let img = e.currentTarget.files[0];
      setSrc(() => URL.createObjectURL(img));
      e.currentTarget.closest(".img-preview")?.classList.add("has-image");
    }
  }
  return (
    <div className={"img-preview " + classNames}>
      {src && <img src={src} alt="Preview" />}
      <label className="change-button" htmlFor={name}>
        <input
          type="file"
          name={name}
          id={name}
          accept=".jpeg,.jpg,.png"
          onChange={onChangeFile}
        />
      </label>
    </div>
  );
}
