import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <h6>RentAppLogo</h6>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to={"/create-ad"}>Create an Ad</Link>
          </li>
          <li className="nav-item">
            <Link to={"/account"}>My Account</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
