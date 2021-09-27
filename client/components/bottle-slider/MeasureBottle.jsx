import React, { useState } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { HiMinus, HiPlus } from "react-icons/hi";

export default function MeasureBottle(props) {
  const [fullBottles, setfullBottles] = useState(0);
  const [percent, setPercent] = useState(null);

  const handlePercentChange = (e) => {
    setPercent(parseInt(e.target.value) / 100);
  };

  const addFullBottle = (e) => {
    setfullBottles(fullBottles + 1);
  };

  const removeFullBottle = (e) => {
    if (fullBottles > 0) {
      setfullBottles(fullBottles - 1);
    }
  };

  // Disable the button if user hasn't set values
  function canContinue() {
    return percent != null;
  }

  function next() {
    if (canContinue()) {
      // Pass data to parent component
      props.complete(fullBottles, percent);

      //Reset state
      setfullBottles(0);
      setPercent(null);
    }
  }

  return (
    <div className="measure-bottles">
      <div className="measure-bottles-top">
        <div>
          Bottle
          <h1>{props.bottle.name}</h1>
        </div>
        <div className="text-right">
          <div>Volume</div>
          <h1>{props.bottle.size}</h1>
        </div>
      </div>
      <div className="measure-bottles-main">
        <label htmlFor="percent">
          Percent
          <input
            type="range"
            name="percent"
            min="0"
            max="100"
            value={percent * 100}
            step="1"
            onChange={handlePercentChange}
          />
          {percent}
        </label>
        <br />
        <br />
      </div>
      <div className="measure-bottle-footer">
        <div className="full-bottles">
          <div className="full-bottles-buttons">
            <button
              className="full-bottles-minus"
              onClick={() => removeFullBottle()}
            >
              <HiMinus />
            </button>
            <div className="full-bottles-value">
              {fullBottles}
              <h2 className="full-bottles-title">Full Bottles</h2>
            </div>
            <button
              className="full-bottles-add"
              onClick={() => addFullBottle()}
            >
              <HiPlus />
            </button>
          </div>
        </div>
        <div className="bottle-done">
          <button onClick={() => next()} disabled={!canContinue()}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
