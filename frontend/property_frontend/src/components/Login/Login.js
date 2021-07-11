import "./login.css";
import React from "react";
import building_logo from "../../assets/house_colour.svg";
import TextField from "../FormControls/TextField";
export default function Login({}) {
  return (
    <div className="login">
      {" "}
      <div className="login-container">
        <section className="banner-overlay"></section>
        <section className="form-section">
          <div className="form-flex">
            <p className="form-title">Find your dream home</p>
            <img className="building" alt="building" src={building_logo} />
            <form>
              <TextField placeholder="Username" classess="login-input" />
              <TextField
                placeholder="Password"
                type="password"
                classess="login-input"
              />
              <button className="login-button">Login</button>
            </form>
            <p>
              Don't have an account? <a href="/register"> Register Now</a>
            </p>
          </div>
          <p className="copyright">© DELTA APPS 2020 - ALL RIGHTS RESERVED</p>
        </section>
      </div>
    </div>
  );
}
