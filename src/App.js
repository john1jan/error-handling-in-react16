import React, { Component } from 'react';
import './App.css';
import Header from "./Header"
import Footer from "./Footer"
import Middle from "./Middle"

class App extends Component {


  render() {

    return (
      <div className="App" >
        <Header />
        <Middle />
        <Footer />
      </div>
    );

  }

}

export default App;
