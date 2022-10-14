import React from "react";

import ChartBar from "./ChartBar";

import "../../CSS/Chart.css";

const Chart = ({ dataPoints }) => {
    const dataValueArray = dataPoints.map(dataPoint => dataPoint.value);
    const dataMaxValue = Math.max(...dataValueArray);
    
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={dataMaxValue}
            label={dataPoint.label}
          />
        )
      )}
    </div>
  );
};

export default Chart;
