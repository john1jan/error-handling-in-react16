import React, { Component } from 'react';

class Culprit extends Component {

  render() {

    return (
      <div style={{ padding: 20, backgroundColor: "#fbe9e7" }}>
        I am the culprit 👹 {this.props.something.somehting()}
      </div>
    );
  }
}

export default Culprit;
