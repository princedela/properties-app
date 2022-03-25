import React, { useState, FormEvent, ChangeEvent } from "react";
import dummy from "../../../dummy";
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
    <form>
      <p className="form-title">Upload Images</p>
      <div className="form-items">
        <button className="save-btn"> Save </button>
      </div>
    </form>
  );
}
