import React from 'react';
import { LineChart, CartesianGrid, XAxis, Label, YAxis, Line } from 'recharts';
import { randomColours } from '../Utils';

const DrawLine = (props) => {
  const { chartObj, colour, chartHeight, chartWidth, xAxisLabel, yAxisLabel } =
    props;

  let lineArr = [];
  for (let i = 0; i < chartObj.mostValuesInSeries; i++) {
    lineArr.push(
      <Line
        type="monotone"
        dataKey={`value${i}`}
        stroke={chartObj.mostValuesInSeries === 1 ? colour : randomColours()}
        isAnimationActive={false}
        activeDot={{ r: 8 }}
      />
    );
  }

  return (
    <LineChart
      width={chartWidth}
      height={chartHeight}
      data={chartObj}
      margin={{ top: 15, right: 5, left: 5, bottom: 20 }}
    >
      <CartesianGrid strokeDasharray="1 1" />
      <XAxis dataKey="name">
        <Label
          value={xAxisLabel}
          offset={-10}
          position="insideBottom"
          fill={'gray'}
        />
      </XAxis>
      <YAxis
        label={{
          value: yAxisLabel,
          angle: -90,
          position: 'insideBottomLeft',
          fill: 'gray',
        }}
        type="number"
        domain={['dataMin', 'dataMax']}
      />
      {lineArr}
    </LineChart>
  );
};

export default DrawLine;
