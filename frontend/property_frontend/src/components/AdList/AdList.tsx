import "./adlist.css";
import Ad from "../Ad/Ad";

export default function AdList() {
  return (
    <div className="ad-list">
      {". "
        .repeat(12)
        .split(" ")
        .map((el, idx) => (
          <Ad key={idx} />
        ))}
    </div>
  );
}
