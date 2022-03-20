import { useEffect } from "react";
import { Link } from "react-router-dom";
import utils from "../../utils";

export default function Ad() {
  useEffect(() => {
    utils.toggleMobileSearch();
  }, []);
  return (
    <div className="ad-mini uk-card uk-card-default">
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
            <img src="/assets/svg/bed.svg" alt="BEDS" />{" "}
            {Math.ceil(Math.random() * 10)}
          </span>
          <span>
            <img src="/assets/svg/bathroom.svg" alt="BATHROOMS" />{" "}
            {Math.ceil(Math.random() * 10)}
          </span>
          <span>
            <img src="/assets/svg/kitchen.svg" alt="KITCHENS" />{" "}
            {Math.ceil(Math.random() * 10)}
          </span>
        </section>
      </div>
    </div>
  );
}
