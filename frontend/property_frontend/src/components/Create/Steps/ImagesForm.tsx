import React, { useState, FormEvent, ChangeEvent } from "react";
import dummy from "../../../dummy";
import ImagePreview from "../../FormControls/ImagePreview/ImagePreview";
import SelectList from "../../FormControls/SelectList/SelectList";
import TextArea from "../../FormControls/TextArea";
import TextField from "../../FormControls/TextField";

export default function ImagesForm({ onSubmit = () => {} }) {
  const [formState, setFormState] = useState({});

  function onUpdateForm(
    e:
      | FormEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const val = e.currentTarget.value;
    const key = e.currentTarget.name;
    setFormState((currForm) => ({
      ...currForm,
      [key]: val,
    }));
  }

  return (
    <form className="images-form">
      <p className="form-title">Upload Images</p>
      <div className="form-items">
        <div className="images-box">
          <ImagePreview classNames="main" name="main" />
          <ImagePreview name="img1" />
          <ImagePreview name="img2" />
          <ImagePreview name="img3" />
          <ImagePreview name="img4" />
        </div>
        <button className="save-btn"> Save </button>
      </div>
    </form>
  );
}
