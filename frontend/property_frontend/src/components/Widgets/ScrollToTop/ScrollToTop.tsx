import React from "react";
import "./scrolltotop.css";
export default function ScrollToTop() {
  return (
    <div
      className="scroll-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <img src="/assets/svg/up-arrow-svgrepo-com.svg" alt="Up Arrow" />
    </div>
  );
}
