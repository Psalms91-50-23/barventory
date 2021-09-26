import React, { useState } from "react";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import MeasureBottle from "./MeasureBottle";

export default function BottleSlider () {
  //If the page should redirect to reports
  const [redirect, setRedirect] = useState(false);

  // Current bottle index. eg 4 would be 4th/15 bottles
  const [progress, setProgress] = useState(0);
  
  const [report, setReport] = useState([]);

  const inventory = {
    bottles: [
      {
        id: 0,
        name: "Beefeater 24",
        size: "700ml",
        image:
          "https://taumarunui.superliquor.co.nz/images/thumbs/0001908_550.jpeg",
      },
      {
        id: 1,
        name: "Baileys The Original Irish Cream",
        size: "1 Litre",
        image:
          "https://taumarunui.superliquor.co.nz/images/thumbs/0000311_baileys-irish-cream-1-litre_550.jpeg",
      },
      {
        id: 2,
        name: "Absolut Elyx",
        size: "700ml",
        image:
          "https://taumarunui.superliquor.co.nz/images/thumbs/0002561_absolut-elyx-700ml_550.jpeg",
      },
      {
        id: 3,
        name: "Ballantine's Finest Blended",
        size: "1 Litre",
        image:
          "https://taumarunui.superliquor.co.nz/images/thumbs/0001845_550.jpeg",
      },
    ],
  };

  const currentBottle = inventory.bottles[progress];

  function nextBottle(fullBottles, percent) {
    setReport([
      ...report,
      {
        bottleId: currentBottle.id,
        bottleName: currentBottle.name,
        bottleSize: currentBottle.size,
        fullBottles: fullBottles,
        percent: percent,
      },
    ]);
    //Check if there's a next bottle
    if (inventory.bottles[progress + 1] != null) {
      setProgress(progress + 1);
    } else {
      // We've completed the report.
      // TODO: POST Report to database
      // then
      setRedirect(true);
    }
  }

  return (
    <div class="bottle-slider-screen">
      <div className="bottle-slider-head">
        <NavLink to="/inventory" className="button bottle-slider-cancel">
          Cancel
        </NavLink>
        <div className="bottle-slider-progress">
          {progress + 1}/{inventory.bottles.length}
        </div>
      </div>
      <MeasureBottle bottle={currentBottle} complete={nextBottle} />
      {redirect && <Redirect to="/reports" />}
    </div>
  );
}
