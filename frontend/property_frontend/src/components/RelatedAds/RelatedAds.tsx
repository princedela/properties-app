import React, { useState } from "react";
import "./related-ads.css";
import dummy from "../../dummy";
import Ad from "../Ad/Ad";
import { useHistory } from "react-router-dom";

export default function RelatedAds() {
  const [ads, setAds] = useState(dummy.ads);
  const history = useHistory();

  return (
    <section className="related">
      <h4>Related Ads</h4>
      <div className="listings">
        {ads.slice(0, 2).map((el, idx) => (
          <Ad key={idx} {...el} onClick={() => history.push(`/ad/${idx}`)} />
        ))}
      </div>
    </section>
  );
}
