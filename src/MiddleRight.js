import React, { Component } from 'react';
import Culprit from "./Culprit"
class MiddleRight extends Component {


  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  render() {
    if (this.state.hasError) {
      return <div>
        <div style={{ padding: 20, color: "red" }}>
          Something went wrong
        </div>
      </div>
    }

    return (
      <div style={{ flex: 1, display: "flex", justifyContent: "center", flexDirection: "column", height: "100%" }}>
        <div style={{ flex: 5, justifyContent: "center", display: "flex", alignSelf: "center", flexDirection: "column" }}>
          <h3>Right</h3>
        </div>
        <div style={{ flex: 1, justifyContent: "flex-end", display: "flex", flexDirection: "column" }}>
          <Culprit />
        </div>
      </div >
    );
  }

  // componentDidCatch() {
  //   this.setState({
  //     hasError: true
  //   })
  // }

}

export default MiddleRight;





