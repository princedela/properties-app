import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import dummy from "../../dummy";
import utils from "../../utils";
import Banner from "../Widgets/Banner/Banner";
import Navbar from "../Widgets/Navbar/Navbar";
import "./ad-details.css";
import GoogleMapReact from "google-map-react";
import RelatedAds from "../RelatedAds/RelatedAds";

export default function AdDetails(props: AdDetailsProps) {
  const defaultAd: any = {};
  const adId = parseInt(props.match.params["id"]);
  const [ad, setAd] = useState(defaultAd);

  useEffect(() => {
    setAd(dummy.ads.filter((ad, index) => index === adId)[0]);
    return () => {};
  }, []);

  return (
    <div className="listing-details">
      <Navbar />
      <div className="container">
        <section className="listing-image-container">
          <img src={ad.imageUrl} className="listing-image" />
        </section>

        <section className="listing-body">
          <h3 className="listing-title">
            {ad.type} {ad.category?.toLowerCase()} at {ad.location}
          </h3>
          <h5>{ad.price}</h5>
          <h5>{ad.description}</h5>
          <hr />
          <div className="extras">
            <section className="skus">
              <section className="listing-location">
                <table>
                  <tbody>
                    <tr>
                      <td>Region</td>
                      <td>
                        <b>{ad.region}</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Location</td>
                      <td>
                        <b>{ad.location}</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <hr />
              <section className="utils">
                <table>
                  <tbody>
                    <tr>
                      <td className="util-icon">
                        <img src="/assets/svg/bed.svg" alt="BEDS" />
                      </td>
                      <td>
                        <span>Bedrooms</span>
                      </td>
                      <td>
                        <span className="val">
                          {Math.ceil(Math.random() * 10)}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="util-icon">
                        <img src="/assets/svg/bathroom.svg" alt="BATHROOMS" />
                      </td>
                      <td>
                        <span>Bathrooms</span>
                      </td>
                      <td>
                        <span className="val">
                          {Math.ceil(Math.random() * 10)}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="util-icon">
                        <img src="/assets/svg/kitchen.svg" alt="KITCHENS" />
                      </td>
                      <td>
                        <span>Kitchens</span>
                      </td>
                      <td>
                        <span className="val">
                          {Math.ceil(Math.random() * 10)}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <hr />
            </section>
            <section className="map">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyDIE2bJ5U2LiFUPuuhmq7fAwcj_ousCQWc",
                }}
                defaultCenter={{ lat: 5.6119476, lng: -0.2551413 }}
                defaultZoom={11}
              ></GoogleMapReact>
            </section>
          </div>
          <hr />
        </section>

        <RelatedAds />
      </div>
    </div>
  );
}

interface AdDetailsProps extends RouteComponentProps<RouteParams> {}
interface RouteParams {
  id: string;
}
