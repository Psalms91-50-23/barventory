import React, { useEffect } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { format } from "date-fns";

function Graph(props) {
  const { historyData } = props;

  useEffect(() => {
    prepData();
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
          indexBy={(data) => format(new Date(data.reportDate), "E d/M yy hh:mma")}
          margin={{ top: 50, right: 45, bottom: 100, left: 75 }}
          padding={0.25}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          valueFormat={{ format: "", enabled: false }}
          isInteractive={false}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -33,
            legendPosition: "middle",
            legendOffset: 32,
          }}
          colors={{ scheme: "set2" }}
          labelSkipWidth={100}
          labelTextColor="white"
          theme={{
            background: "#ffffff",
            textColor: "#333333",
            fontSize: 16,
            axis: {
              domain: {
                line: {
                  stroke: "#777777",
                  strokeWidth: 0.8,
                },
              },
              ticks: {
                line: {
                  stroke: "#777777",
                  strokeWidth: 0.8,
                },
              },
            },
            grid: {
              line: {
                stroke: "#dddddd",
                strokeWidth: 1.5
              },
            },
            labels: {
              text: {
                fontWeight: 600,
                fontSize: "18px",
              }
            }
          }}
        />
      </div>
    </>
  );
}

export default Graph;
