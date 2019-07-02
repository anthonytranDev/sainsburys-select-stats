import React, {Fragment} from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries as BarSeries,
} from 'react-vis';


export default ({ dataset }) => {
  let data;
  const multipleDatasets = Array.isArray(dataset[0]);

  if(multipleDatasets){
    data = dataset
  } else {
    data = [dataset]
  }

  return (
    <div>
      <XYPlot xType="ordinal" width={300} height={300} xDistance={100}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <BarSeries className="vertical-bar-series-example" data={data[0]} />
        {multipleDatasets && <BarSeries data={data[1]} />}
      </XYPlot>
    </div>
  )
}