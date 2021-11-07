import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <h6>
          RentApp<span>Logo</span>
        </h6>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to={"/create-ad"}>Create an Aaad</Link>
          </li>
          <li className="nav-item">
            <Link to={"/account"}>My Account</Link>
          </li>
        </ul>
        <a href="#mobile-menu">
          <div className="mobile-menu-link">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
      </div>

      <nav id="mobile-menu">
        <ul>
          <li className="menu-item">
            <Link to="/create-ad">
              <span>Create An Ad</span>
              {/* <img src="./assets/svg/Icon ionic-md-home.svg" /> */}
            </Link>
          </li>
          <li className="menu-item active">
            <a href="/account">
              <span>My Account</span>
              {/* <img src="./assets/svg/Icon material-contacts.svg" /> */}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
