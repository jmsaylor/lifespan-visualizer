import React, { Component } from "react";
import "./App.css";
import EntireLife from "./components/EntireLife";
import Form from "./components/Form";
import EXIF from "exif-js";

class App extends Component {
  constructor(props) {
    super(props);
    const age = 29;
    let arr = [...Array(age)].map((elem, idx) => {
      return { id: idx };
    });
    this.state = {
      lifespan: 75,
      age: age,
      weeks: [...arr],
    };
  }

  changeAge = (age) => {
    this.setState({
      age: age,
    });
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        <Form changeAge={this.changeAge} />
        <EntireLife
          lifespan={this.state.lifespan}
          age={this.state.age}
          weeks={this.state.weeks}
        />
      </div>
    );
  }
}

export default App;
