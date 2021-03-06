import { useState } from "react";
import "./adlist.css";
import Ad from "../Ad/Ad";
import dummy from "../../dummy";
import { useHistory } from "react-router-dom";

export default function AdList() {
  const [ads, setAds] = useState(dummy.ads);

  const history = useHistory();

  return (
    <div className="ad-list">
      {ads.map((el, idx) => (
        <Ad key={idx} {...el} onClick={() => history.push(`/ad/${idx}`)} />
      ))}
    </div>
  );
}
