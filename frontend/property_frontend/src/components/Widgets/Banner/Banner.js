import React from "react";
import TextField from "../../FormControls/TextField";
import search_icon from "../../../assets/search_wht.svg";
import "./banner.css";
export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-overlay">
        <p>APARTMENTS, HOTELS, HOSTELS, STORES, WAREHOUSES, ETC</p>
        <p>FIND APARTMENT LISTINGS WITHOUT A SWEAT</p>
        <div className="search-box">
          <TextField placeholder="Search by keyword" classess="search" />
          <button className="icon-btn">
            <img src={search_icon} alt="search" />
          </button>
        </div>
      </div>
    </div>
  );
}
