import { useState } from "react";
import "./adlist.css";
import Ad from "../Ad/Ad";
import dummy from "../../dummy";

export default function AdList() {
  const [ads, setAds] = useState(dummy.ads);
  return (
    <div className="ad-list">
      {ads.map((el, idx) => (
        <Ad key={idx} {...el} />
      ))}
    </div>
  );
}
