import React, { useState, FormEvent, ChangeEvent } from "react";
import dummy from "../../../dummy";
import SelectList from "../../FormControls/SelectList/SelectList";
import TextArea from "../../FormControls/TextArea";
import TextField from "../../FormControls/TextField";
export default function () {
  const [formState, setFormState] = useState(dummy.states.generalForm);

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
      <p className="form-title">General Information</p>
      <div className="form-items">
        <SelectList
          placeholder="Listing Type"
          options={dummy.listingTypes}
          value={formState.type}
          onchange={onUpdateForm}
          name="type"
        />
        <SelectList
          placeholder="Listing category"
          options={dummy.listingCategories}
          value={formState.category}
          name="category"
          onchange={onUpdateForm}
        />
        <TextField
          placeholder="Title"
          name="title"
          value={formState.title}
          onchange={onUpdateForm}
        />
        <TextArea
          placeholder="Description"
          rows={5}
          name="description"
          value={formState.description}
          onchange={onUpdateForm}
        />
        <div className="flexy" style={{ gap: "15px" }}>
          <TextField
            type="number"
            placeholder="Price"
            value={formState.price}
            onchange={onUpdateForm}
            name="price"
          />
          <SelectList
            placeholder="Duration"
            options={dummy.payPeriods}
            value={formState.payPeriod}
            onchange={onUpdateForm}
            name="payPeriod"
          />
        </div>

        <button className="save-btn"> Save </button>
      </div>
    </form>
  );
}
