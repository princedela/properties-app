import React from "react";
import "./banner.css";

export default function ProfileBanner() {
  return (
    <div
      className="banner"
      style={{ backgroundImage: "url('/assets/images/me_banner.jpg')" }}
    >
      <div className="banner-overlay">
        {/* <p>Apartments, hotels, hostels, stores, warehouses, etc</p>
        <p>Find apartment listings without a sweat</p> */}
      </div>
      <div className="user-img">
        <img alt="PROFILE" src="/assets/images/me_user.jpg" />
      </div>
    </div>
  );
}
