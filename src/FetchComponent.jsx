import axios from "axios";
import React from "react";

const API = "https://jsonplaceholder.typicode.com";

export const fetchUserName = async resource => {
  let response;
  try {
    response = await axios.get(API + resource).then(response => response.data);
  } catch (exception) {
    response = new Error("Network error");
  }
  return response;
};

class FetchComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      name: "",
      email: "",
      error: ""
    };
  }

  componentDidMount() {
    fetchUserName("/users/1")
      .then(response => {
        this.setState({
          loading: false,
          name: response.name,
          email: response.email
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error
        });
      });
  }

  render() {
    if (this.state.loading) return <div>Loading</div>;
    else if (this.state.error !== "") return <div>{this.state.error}</div>;
    else {
      return (
        <div>
          <label>{this.state.name}</label>
          <label>{this.state.email}</label>
        </div>
      );
    }
  }
}

export default FetchComponent;
