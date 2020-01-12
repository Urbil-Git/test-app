import React from "react";
import "./App.css";

//CAMBIO PA JODER

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      nameHelper: "",
      emailHelper: ""
    };
  }
  handleName = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  handleSubmit = () => {
    this.setState(state => {
      let nameHelper = "";
      let emailHelper = "";
      if (state.name === "") nameHelper = "incorrect name";
      if (state.email === "") emailHelper = "incorrect email";
      return {
        nameHelper,
        emailHelper
      };
    });
  };

  render() {
    return (
      <div>
        <label>Name</label>
        <input
          type="text"
          data-testid="name"
          value={this.state.name}
          onChange={this.handleName}
        ></input>
        <label data-testid="nameHelper">{this.state.nameHelper}</label>
        <label>Email</label>
        <input
          type="email"
          data-testid="email"
          value={this.state.email}
          onChange={this.handleEmail}
        ></input>
        <label data-testid="emailHelper">{this.state.emailHelper}</label>
        <button data-testid="submitButton" onClick={this.handleSubmit}></button>
      </div>
    );
  }
}

export default Form;
