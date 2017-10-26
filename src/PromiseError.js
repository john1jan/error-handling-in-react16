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
      <div style={{ padding: 20, backgroundColor: "#fbe9e7" }}>
        I am the PromiseError 👹
        {
          this.state.posts.map((item) => {
            return <div>
              {item.title}
            </div>
          })
        }
      </div>
    );
  }



  componentDidMount() {
    // this.props.somethingUndefined();
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({
        posts: data
      });
      // throw new Error("I am new Error");
    }).catch((error) => {
      console.log("caught error");
    })
  }
}

export default PromiseError;
