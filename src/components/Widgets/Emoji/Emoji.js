// https://github.githubassets.com/images/icons/emoji/atom.png?v8
import React, { Component } from "react";

class Emoji extends Component {
  state = { appname: "Emoji Widget", img: "Hello" };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(resData =>
        this.setState({
          img: "https://via.placeholder.com/100/d32776"
        })
      )
      .catch(e => console.log(e));
  }
  componentWillUnmount() {
    console.log("Unmounted");
  }
  render() {
    return (
      <div className="Emoji" key={this.state.appname}>
        <img src={this.state.img} />
      </div>
    );
  }
}

export default Emoji;
