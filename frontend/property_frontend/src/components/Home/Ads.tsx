import React, { useState } from "react";
import AdList from "../AdList/AdList";
import Banner from "../Widgets/Banner/Banner";
import Navbar from "../Widgets/Navbar/Navbar";
import "./ads.css";
import TextField from "../FormControls/TextField";
import FilterBox from "../Widgets/FilterBox/FilterBox";
export default function Ads() {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="mob-search">
        <div className="search-box">
          <TextField
            placeholder="Search by keyword"
            classes="search"
            value={search}
            onchange={(e: React.FormEvent<HTMLInputElement>) =>
              setSearch(e.currentTarget.value)
            }
          />
          <button className="icon-btn">
            <img src="/assets/svg/search_wht.svg" alt="search" />
          </button>
        </div>
      </div>
      <Navbar />
      <Banner />
      <div className="container">
        <div className="ads-container">
          <AdList />
          <FilterBox />
        </div>
      </div>
    </>
  );
}
