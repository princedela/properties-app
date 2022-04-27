import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Banner from "../Widgets/Banner/Banner";
import Navbar from "../Widgets/Navbar/Navbar";

import "./ad-details.css";

export default function AdDetails({ match }: AdDetailsProps) {
  const adId = parseInt(match.params["id"]);
  return (
    <div className="ad-details">
      <Navbar />
      <div className="container">
        <h3>Ad {adId}</h3>
      </div>
    </div>
  );
}

interface AdDetailsProps extends RouteComponentProps<RouteParams> {}
interface RouteParams {
  id: string;
}
