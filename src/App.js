import React, { Component } from "react";
import "./App.css";
import EntireLife from "./components/EntireLife";
import Form from "./components/Form";
import EXIF from "exif-js";
import pic from "./img/skybeach.jpg";
// import fs from "fs";

class App extends Component {
  constructor(props) {
    super(props);
    const age = 29;
    let arr = [...Array(age)].map((elem, idx) => {
      return { id: idx, photos: [] };
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

  getPhotoData = (img) => {
    // fs.readFile("img", (err, data) => {
    //   img = data;
    // });
    // console.log(img);
    // console.log(EXIF);
    // let reader = new FileReader();
    // let blob = new Blob(img);
    // img = reader.readAsText(img);
    // reader.readAsDataURL();
    var data = null;
    var tags = null;
    EXIF.getData(img, () => {
      // let id = 1
      // this.setState({
      // })
      console.log("1");
    });
    return tags;
  };

  componentDidMount() {
    let data = this.getPhotoData(pic);
    console.log(data);
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
