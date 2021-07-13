import React from "react";
import TextField from "../../FormControls/TextField";
import "./banner.css";
export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-overlay">
        <p>APARTMENTS, HOTELS, HOSTELS, STORES, WAREHOUSES, ETC</p>
        <p>FIND APARTMENT LISTINGS WITHOUT A SWEAT</p>
        <div className="search-box">
          <TextField />
        </div>
      </div>
    </div>
  );
}
