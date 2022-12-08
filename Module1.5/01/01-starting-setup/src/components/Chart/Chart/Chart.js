import React from "react";
import "./Chart.css";
import ChartBar from "../ChartBar/ChartBar";

export default function Chart({ dataPoints }) {
  const valueArray = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...valueArray);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
          key={Math.random()}
        />
      ))}
    </div>
  );
}
