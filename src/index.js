import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";

import "./styles.css";

function D3Hooks() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);
  useEffect(() => {
    console.log(new Array(count).fill(5));
    let selection = d3
      .select("svg")
      .selectAll("rect")
      .data(() => {
        const data = new Array(count).fill(5);
        console.log(data);
        return data;
      })
      .attr("width", `${15}px`)
      .attr("height", `${15}px`)
      .attr("x", (_, i) => `${15}px`)
      .attr("y", (_, i) => `${15 * i}px`)
      .attr("fill", "red")
      .style("display", "block");

    selection
      .enter()
      .append("rect")
      .attr("fill", "green")
      .attr("width", `${15}px`)
      .attr("height", `${15}px`)
      .attr("x", (_, i) => {
        console.log(count, i);
        return `${15}px`;
      })
      .attr("y", (_, i) => `${15 * i}px`);

    selection.exit().remove();
  });
  return (
    <div style={{ textAlign: "center", margin: "auto", display: "block" }}>
      <h1>D3 with hooks</h1>
      <div>Count: {count}</div>
      <div>Incrememtn by : {increment}</div>
      <svg width="400px" height="400px">
        <rect width="15px" height="15px" fill="blue" />
      </svg>
      <button
        style={{ display: "block", margin: "auto" }}
        onClick={() => setCount(count + increment)}
      >
        Draw Square
      </button>
      <button
        style={{ display: "block", margin: "auto" }}
        onClick={() => setCount(Math.max(0, count - increment))}
      >
        Remove Square
      </button>
      <button
        style={{ display: "block", margin: "auto" }}
        onClick={() => setIncrement(increment + 1)}
      >
        + increment
      </button>
      <button
        style={{ display: "block", margin: "auto" }}
        onClick={() => setIncrement(increment - 1)}
      >
        - increment
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<D3Hooks />, rootElement);
