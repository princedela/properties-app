import React from "react";
import TextField from "../FormControls/TextField";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="container">
      <section className="top-footer">
        <div className="links">
          <h5>App Links</h5>
          <ul>
            <li>
              <a href="#">Search / Browse</a>
            </li>
            <li>
              <a href="#">Create New Ad</a>
            </li>
            <li>
              <a href="#">Promote An Ad</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
        </div>
        <div className="more">
          <h5>More</h5>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">For Developers</a>
            </li>
            <li>
              <a href="#">About Company</a>
            </li>
          </ul>
        </div>
        <div className="alerts-form">
          <h5>Signup for news and alerts</h5>
          <ul>
            <li>
              <TextField type="email" isBlock={true} />
            </li>
          </ul>
        </div>
        <div className="contact">
          <h5>Contact Us</h5>
          <ul>
            <li>
              <a href="#">
                <img src="/assets/svg/instagram.svg" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/assets/svg/facebook.svg" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/assets/svg/twitter.svg" alt="Twitter" />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="bottom-footer">
        <p>Copyright Switch ITG &copy; {new Date().getFullYear()}</p>
      </section>
    </footer>
  );
}
