import React, { Component } from 'react';
import MiddleLeft from "./MiddleLeft"
import MiddleRight from "./MiddleRight"

class Culprit extends Component {



  render() {

    return (
      <div style={{ padding: 20, backgroundColor: "#fbe9e7" }}>
        I am the culprit 👹
      </div>
    );
  }



  componentDidMount() {
    // this.props.somethingUndefined();
    // fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
    //   return response.json();
    // }).then((data) => {
    //   console.log("data", data);
    // }).catch((error) => {
    //   console.log("caught error");
    // })
  }
}

export default Culprit;
