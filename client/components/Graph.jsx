import React, { useEffect } from "react";
import { ResponsiveBar } from "@nivo/bar";

function Graph(props) {
  const { historyData } = props;

  useEffect(() => {
    prepData()
  }, []);

  function prepData() {
    historyData.map((data) => {
      data.fullBottles =
        data.fullBottles +
        Math.round((data.percent + Number.EPSILON) * 100) / 100;
      data.fullBottles =
        Math.round((data.fullBottles + Number.EPSILON) * 100) / 100;
    });
  }

  return (
    <>
      <div className="graph-container">
        <ResponsiveBar
          data={historyData}
          keys={["fullBottles"]}
          indexBy="reportDate"
          margin={{ top: 50, right: 45, bottom: 100, left: 75 }}
          padding={0.25}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          valueFormat={{ format: "", enabled: false }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -33,
            legendPosition: 'middle',
            legendOffset: 32
          }}
          colors={{ scheme: "set2" }}
        />
      </div>
    </>
  );
}

export default Graph;
