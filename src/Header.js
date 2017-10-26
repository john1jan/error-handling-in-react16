import React, { Component } from 'react';

class Header extends Component {

  render() {
    return <div style={{ padding: 20, border: "1px solid #33691e" }}>
      <h2>Header</h2>
    </div>
  }

  componentDidMount() {

    // throw new Error("Error from catch child");
    // fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
    //   console.log("response", response)
    //   throw new Error("I reached child 2");
    // }).catch((error) => {
    //   console.log("caught error");
    //   throw new Error("Error from catch swallow")
    // })
  }

  componentDidCatch(error, info) {
    console.log("Component caught error child");
    // this.setState({ hasError: true });
  }
}

export default Header;
