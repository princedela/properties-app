import { MouseEventHandler, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dummy from "../../dummy";
import utils from "../../utils";
import AdInterface from "./AdInterface";
const descriptionMaxLength = 60;
export default function Ad({
  imageUrl,
  type,
  category,
  location,
  description,
  price,
  age,
  onClick,
}: AdInterface) {
  useEffect(() => {
    utils.toggleMobileSearch();
  }, []);
  return (
    <div className="ad-mini uk-card uk-card-default" onClick={onClick}>
      <div
        className="img-sec"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <p>{type}</p>
        <p>{category}</p>
      </div>
      <div className="details">
        <p className="location">{location}</p>
        <p className="description">
          {description.substring(0, descriptionMaxLength)}{" "}
          {description.length > descriptionMaxLength && "..."}
        </p>

        <Link className="price" to="#">
          {price}
        </Link>
        <span className="time">{age}</span>
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
