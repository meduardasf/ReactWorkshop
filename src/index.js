import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";

import "./styles.css";
import Card from "./Card";
import ROBOTS from "./state/robots";
import RobotsList from "./RobotsList";

function App() {
  return (
    <div className="App">
      <Header />
      <RobotsList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
