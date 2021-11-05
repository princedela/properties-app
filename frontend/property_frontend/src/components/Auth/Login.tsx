import "./auth.css";
import React, { useState } from "react";
import TextField from "../FormControls/TextField";
export default function Login({}) {
  const [form, setForm] = useState({ username: "", password: "" });
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
            <p className="form-title">Find your dream home</p>
            <img
              className="building"
              alt="building"
              src="/assets/svg/house_colour.svg"
            />
            <form>
              <TextField
                placeholder="Username / Email"
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
