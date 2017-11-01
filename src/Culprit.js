import React, { Component } from 'react';

class Culprit extends Component {

  render() {

    return (
      <div style={{ padding: 20, backgroundColor: "#fbe9e7" }}>
        I am the culprit 👹

      </div>
    );
  }


  componentDidMount() {
    try {
      // throw new Error("I am error from try");    this will not trigger error boundary 
      this.setState(state => {
        throw new Error("I am error from try");  // This will trigger error boundary and will show fallback ui
        return { ...state }
      })
    } catch (error) {
      console.log("Caught error", error)
    }
  }

}

export default Culprit;
