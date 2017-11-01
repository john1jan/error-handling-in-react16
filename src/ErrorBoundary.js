import React, { Component } from 'react';
import './App.css';
import Header from "./Header"
import Footer from "./Footer"
import Middle from "./Middle"
class App extends Component {

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="App">
          Something went wrong
        </div>
      );
    }
    return (
      <div className="App" >
        {this.props.children}
      </div>
    );

  }

  componentDidCatch(error, info) {
    console.log("componentDidcatch", error)
    console.log("componentDidcatch info", info)
    this.setState({ hasError: true });
  }
}

export default App;
