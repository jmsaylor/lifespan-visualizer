import React, { Component } from "react";
import "./App.css";
import EntireLife from "./components/EntireLife";
import Form from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lifespan: 75,
      age: 29,
    };
  }

  changeAge = (age) => {
    this.setState({
      age: age,
    });
  };

  render() {
    return (
      <div>
        <Form changeAge={this.changeAge} />
        <EntireLife lifespan={this.state.lifespan} age={this.state.age} />
      </div>
    );
  }
}

export default App;
