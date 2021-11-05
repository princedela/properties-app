import React from "react";
import "./adlist.css";
import { Link } from "react-router-dom";
export default function AdList() {
  return (
    <div className="ad-list">
      {". "
        .repeat(150)
        .split(" ")
        .map((el, idx) => (
          <div className="ad-mini uk-card uk-card-default" key={idx}>
            <div
              className="img-sec"
              style={{
                backgroundImage: "url(/assets/images/house-listing.png)",
              }}
            >
              <p>House</p>
              <p>For sale</p>
            </div>
            <div className="details">
              <p className="location">East Legon</p>
              <p className="description">
                Four Bedroom house with spacious attic and very ...
              </p>
              <Link to="#">GHC 3000 / month</Link>
              <Link to="#">Read more</Link>
              <span className="time">1 week</span>
              <section className="badges">
                <span>
                  <img src="/assets/svg/bed.svg" alt="BED" /> 4
                </span>
                <span>
                  <img src="/assets/svg/bathroom.svg" alt="BATHROOM" /> 5
                </span>
                <span>
                  <img src="/assets/svg/kitchen.svg" alt="KITCHEN" /> 2
                </span>
              </section>
            </div>
          </div>
        ))}
    </div>
  );
}
