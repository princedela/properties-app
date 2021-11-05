import React, { useState } from "react";
import AdList from "../AdList/AdList";
import Banner from "../Widgets/Banner/Banner";
import Navbar from "../Widgets/Navbar/Navbar";
import "./ads.css";
import TextField from "../FormControls/TextField";
import ScrollToTop from "../Widgets/ScrollToTop/ScrollToTop";
import MobileTabs from "../Widgets/MobileTabs/MobileTabs";
export default function Ads() {
  const [search, setSearch] = useState("");

  return (
    <div>
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
          <div className="filter-card uk-card uk-card-default"></div>
          <AdList />
          
        </div>
      </div>
      <MobileTabs />
      <ScrollToTop />
    </div>
  );
}
