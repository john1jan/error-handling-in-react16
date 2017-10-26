import React, { Component } from 'react';
import './App.css';
import Header from "./Header"
import Footer from "./Footer"
import Middle from "./Middle"
import ErrorBoundary from './ErrorBoundary'
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
        <Header />
        <Middle />
        <Footer />
      </div>
    );

  }

  // componentDidCatch(error, info) {
  //   console.log("Component caught error app");
  //   this.setState({ hasError: true });
  // }
}

export default App;
