import React, { Component } from 'react';
import MiddleLeft from "./MiddleLeft"
import MiddleRight from "./MiddleRight"

class PromiseError extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }


  render() {
    return (
      <div style={{ padding: 20, backgroundColor: "#fbe9e7", overflow: "scroll", height: "100%" }}>
        I am the PromiseError 👹
        {
          this.state.posts.map((item) => {
            return <div style={{ textAlign: "left" }}>
              {item.title}
            </div>
          })
        }
      </div>
    );
  }



  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
      return response.json();
    }).then((data) => {
      console.log("data", data);
      throw new Error("Error in promise");  // this will not trigger error boundary in because it doesnot affect render 
      // this.setState({     // this method wil trigger error boundary and will show fallback ui
      //   posts: data
      // })
    }).catch((error) => {
      console.log("caught error", error);
    })
  }
}

export default PromiseError;
