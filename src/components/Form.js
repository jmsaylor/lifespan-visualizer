import React, { Component } from "react";

class Form extends Component {
  state = {
    age: null,
  };

  handleChange = (e) => {
    this.setState({
      age: e.target.value,
    });
    console.log(this.state.age);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.changeAge(this.state.age);
  };

  render() {
    return (
      <div className='form'>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type='text' onChange={(e) => this.handleChange(e)} />
          <button type='submit'>Submit</button>
        </form>
        <p>Enter you Age</p>
      </div>
    );
  }
}

export default Form;
