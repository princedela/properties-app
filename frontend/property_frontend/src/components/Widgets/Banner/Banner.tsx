import React, { useState } from "react";
import TextField from "../../FormControls/TextField";
import "./banner.css";
export default function Banner() {
  const [search, setSearch] = useState("");
  return (
    <div className="banner">
      <div className="banner-overlay">
        <p>Apartments, hotels, hostels, stores, warehouses, etc</p>
        <p>Find apartment listings without a sweat</p>
        <div className="search-box">
          <TextField
            placeholder="Search by keyword"
            classes="search"
            value={search}
            onchange={(e) => setSearch(e.currentTarget.value)}
          />
          <button className="icon-btn">
            <img src="/assets/svg/search_wht.svg" alt="search" />
          </button>
        </div>
      </div>
    </div>
  );
}
