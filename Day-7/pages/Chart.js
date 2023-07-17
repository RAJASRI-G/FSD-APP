import React from "react";
import "./Chart.css";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const Chart = () => {
  const data = [
    { name: "COMPLETED", users: 200 },
    { name: "TODO", users: 1500 },
    { name: "DOING", users: 100 },
    { name: "ON PROCESS", users: 500 },
  ];

  return (
    <div className="ch">
    <div style={{ textAlign: "center" }}>
    <h1 className="head">OVERVIEW OF PROCESS</h1>
    <div className="App2">
        <PieChart width={700} height={500}>
        <Pie
        dataKey="users"
        isAnimationActive={false}
        data={data}
        cx={300}
        cy={300}
        outerRadius={150}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
              top: 5,
              right: 60,
              left: 40,
              bottom: 5,
            }}
            barSize={20}
            >
            <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
            </BarChart>
            </div>
            </div>
            </div>
            );
        };
        
export default Chart;