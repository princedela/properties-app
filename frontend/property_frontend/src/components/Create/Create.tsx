import React, { useState } from "react";

import Navbar from "../Widgets/Navbar/Navbar";
import "./create.css";
import GeneralForm from "./Steps/GeneralForm";

export default function Create() {
  return (
    <>
      <Navbar />
      <div className="container padded">
        <ul className="progress-steps">
          <li className="pass active">General</li>
          <li className="">Images</li>
          <li>Location</li>
          <li>Extras</li>
        </ul>

        <div className="ad-form">
          <GeneralForm />
        </div>
      </div>
    </>
  );
}
