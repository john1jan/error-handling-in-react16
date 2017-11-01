import React, { Component } from 'react';
import MiddleLeft from "./MiddleLeft"
import MiddleRight from "./MiddleRight"

class Middle extends Component {



  render() {

    return (
      <div style={{ flexDirection: "row", display: "flex", flex: 1, height: '70vh', justifyContent: "center" }}>
        <div style={{ flex: 1 }}>
          <MiddleLeft />
        </div>
        <div style={{ flex: 1 }}>
          <MiddleRight />
        </div>
      </div>
    );
  }



}

export default Middle;
