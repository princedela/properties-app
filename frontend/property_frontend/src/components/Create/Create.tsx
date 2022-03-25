import React, { useState } from "react";
import dummy from "../../dummy";

import Navbar from "../Widgets/Navbar/Navbar";
import "./create.css";
import GeneralForm from "./Steps/GeneralForm";
import ImagesForm from "./Steps/ImagesForm";

export default function Create() {
  const [formSteps, setFormSteps] = useState(dummy.tabs.createFormSteps);
  const [selectedId, setSelectedId] = useState(1);

  function activateFormStep(newId: number) {
    setSelectedId(newId);
  }

  function renderCurrentStep() {
    switch (selectedId) {
      case 1:
        return <GeneralForm onSubmit={() => activateFormStep(2)} />;
      case 2:
        return <ImagesForm onSubmit={() => activateFormStep(3)} />;
      default:
        return null;
    }
  }
  return (
    <>
      <Navbar />
      <div className="container padded">
        <ul className="progress-steps">
          {formSteps.map(({ name, id }) => (
            <li
              className={
                (selectedId >= id ? "pass" : "") +
                (selectedId === id ? " active" : "")
              }
            >
              {name}
            </li>
          ))}
        </ul>

        <div className="ad-form">{renderCurrentStep()}</div>
      </div>
    </>
  );
}
