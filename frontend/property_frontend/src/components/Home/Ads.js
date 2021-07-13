import React from "react";
import Banner from "../Widgets/Banner/Banner";
import Navbar from "../Widgets/Navbar/Navbar";
import "./home.css";
export default function Ads() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="container"></div>
    </div>
  );
}
