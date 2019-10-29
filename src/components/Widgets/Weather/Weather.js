import React, { Component } from "react";

class Weather extends Component {
  state = { appname: "Weather Widget", name: "" };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => res.json())
      .then(resData => this.setState({ name: resData.title }))
      .catch(e => console.log(e));
  }
  componentWillUnmount() {
    console.log("Unmounted");
  }
  render() {
    return (
      <div key={this.state.appname}>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default Weather;
