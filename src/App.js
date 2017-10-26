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
    return (
      <div className="App" >
        <ErrorBoundary>
          <Header />
          <Middle />
          <Footer />
        </ErrorBoundary>
      </div>
    );
  }

}

export default App;
