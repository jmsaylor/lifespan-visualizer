import React, { Component } from "react";
import "./App.css";
import EntireLife from "./components/EntireLife";
import Form from "./components/Form";
import blueimp from "blueimp-load-image";
// import pic from "./img/skybeach.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    const age = 29;
    let arr = [...Array(age * 52)].map((elem, idx) => {
      return {
        id: idx,
        photos: [],
        startDate: null,
      };
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

  getPhotoData = (url) => {
    blueimp(url, { meta: true }).then((exif) => {
      const date = exif.exif["34665"]["36868"];
    });
  };

  componentDidMount() {
    let { weeks } = this.state;
    let date = new Date("01 / 01 / 1989");
    for (let x = 0; x < weeks.length; x++) {
      let day = date.getDate();
      let month = date.getMonth();
      let year = date.getYear();
      day = date.getDate() + 7;
      date = weeks[x].startDate = new Date(year, month, day);
      console.log(day, month, year);
    }

    console.log(weeks);
    let urls = [
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Pied-winged_swallow_%28Hirundo_leucosoma%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/White-tailed_tropicbird.jpg",
    ];

    urls.forEach((url) => {
      this.getPhotoData(url);
    });
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
