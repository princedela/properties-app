import React from "react";
import CheckBoxInput from "../../FormControls/CheckBoxInput/CheckBoxInput";
import RadioButtonGroup from "../../FormControls/RadioButtonGroup/RadioButtonGroup";
import RangeInput from "../../FormControls/RangeInput/RangeInput";
import "./filter-box.css";
export default function FilterBox() {
  return (
    <div className="filter-card uk-card uk-card-default">
      <div className="title">
        <p>I am looking for</p>
      </div>
      <div className="filter-body">
        <div className="form-control">
          <label>Category</label>
          <select>
            <option>All</option>
            <option>Boom</option>
            <option>Boom</option>
            <option>Boom</option>
            <option>Boom</option>
          </select>
        </div>
        <div className="form-control">
          <label>Listing type</label>
          <select>
            <option>All</option>
            <option>Boom</option>
            <option>Boom</option>
            <option>Boom</option>
            <option>Boom</option>
          </select>
        </div>
        <div className="form-control">
          <label>Region</label>
          <select>
            <option>All</option>
            <option>Boom</option>
            <option>Boom</option>
            <option>Boom</option>
            <option>Boom</option>
          </select>
        </div>
        <div className="form-control">
          <label>Town</label>
          <select>
            <option>All</option>
            <option>Boom</option>
            <option>Boom</option>
            <option>Boom</option>
            <option>Boom</option>
          </select>
        </div>
        <RangeInput label="Price Range" />
        <RangeInput label="Bedrooms" />
        <RangeInput label="Kitchens" />
        <RadioButtonGroup
          name="condition"
          labels={["New", "Used", "Old", "All"]}
        />
        <CheckBoxInput name="furnished" id="furnished" label="Furnished" />
      </div>
    </div>
  );
}
