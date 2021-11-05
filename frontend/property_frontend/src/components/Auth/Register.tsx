import "./auth.css";
import React, { useState } from "react";
import TextField from "../FormControls/TextField";
export default function Register({}) {
  const [form, setForm] = useState({
    username: "",
    password: "",
    password2: "",
  });
  function onInputChange(e: React.FormEvent<HTMLInputElement>) {
    setForm((currForm) => ({
      ...currForm,
      [e.currentTarget.name]: e.currentTarget.value,
    }));
  }
  return (
    <div className="login">
      <div className="login-container">
        <section className="banner-overlay"></section>
        <section className="form-section">
          <div className="form-flex">
            <p className="form-title">Rent or sell a house</p>
            <img
              className="building"
              alt="building"
              src="/assets/svg/house_colour.svg"
            />
            <form>
              <TextField
                placeholder="Phone number"
                classes="login-input"
                name="username"
                value={form.username}
                onchange={onInputChange}
              />
              <TextField
                placeholder="Password"
                type="password"
                classes="login-input"
                name="password"
                value={form.password}
                onchange={onInputChange}
              />
              <TextField
                placeholder="Confirm Password"
                type="password"
                classes="login-input"
                name="password2"
                value={form.password2}
                onchange={onInputChange}
              />
              <button className="login-button">Register</button>
            </form>
            <p>
              Already have an account? <a href="/login"> Login Here</a>
            </p>
          </div>
          <p className="copyright">© DELTA APPS 2020 - ALL RIGHTS RESERVED</p>
        </section>
      </div>
    </div>
  );
}
