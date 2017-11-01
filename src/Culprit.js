import React, { Component } from 'react';

class Culprit extends Component {

  render() {

    return (
      <div style={{ padding: 20, backgroundColor: "#fbe9e7" }}>
        I am the culprit 👹

        <button onClick={this.onTriggerClick}>Trigger</button>

      </div>
    );
  }

  onTriggerClick = () => {
    // throw new Error("Blaaaa");
    this.setState(state => {
      throw new Error("Error from Event Click");
      return { ...state }
    })
  }

  componentDidMount() {
    // throw new Error("Blaaaa");
  }

}

export default Culprit;
