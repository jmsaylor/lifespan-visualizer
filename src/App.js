import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import EntireLife from "./components/EntireLife";

class App extends Component {
  state = {
    lifespan: null,
    age: null,
  };
  render() {
    return (
      <div>
        oi
        <EntireLife />
      </div>
    );
  }
}

export default App;
