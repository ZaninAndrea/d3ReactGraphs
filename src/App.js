import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Graph from "./Graph";

class App extends Component {
  state = {
    data: [
      [0, 12, true],
      [1, 4, true],
      [2, 1, true],
      [3, 7, true],
      [4, 13, true],
      [5, 12, true],
      [6, 4, true],
      [7, 4, true],
      [8, 5, true],
      [9, 13, true],
      [10, 1, true],
      [11, 7, true],
      [12, 12, true],
      [13, 13, true],
      [14, 13, true],
      [15, 6, true]
    ],
    x: 15
  };

  render() {
    setTimeout(
      () =>
        this.setState(({ data, x }) => {
          const disconnected = Math.random() < 0.8;
          const newX = disconnected ? x + 1 : x + 3;
          return {
            data: [...data, [newX, Math.random() * 15, disconnected]],
            x: newX
          };
        }),
      1000
    );
    return (
      <div className="App">
        <Graph data={this.state.data} maxPoints={15} threshold={12} />
      </div>
    );
  }
}

export default App;
