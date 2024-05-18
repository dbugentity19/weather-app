import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const WeatherChart = ({ data }) => {
  console.log('data', data);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="datetime" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="temp"
          stroke="#FF0000"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="humidity" stroke="blue" />
        <Line type="monotone" dataKey="windspeed" stroke="green" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WeatherChart;
