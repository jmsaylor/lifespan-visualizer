import React, { Component } from "react";
import "./App.css";
import EntireLife from "./components/EntireLife";
import Form from "./components/Form";
import EXIF from "exif-js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lifespan: 75,
      age: 29,
      weeks: [],
    };
  }

  changeAge = (age) => {
    this.setState({
      age: age,
    });
  };

  componentDidMount() {
    let arr = [...Array(this.state.age)].map((idx) => {
      return { id: idx };
    });
    console.log(arr);
  }

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
