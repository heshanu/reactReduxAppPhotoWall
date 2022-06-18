import React, { Component } from "react";
class Photo extends Component {
  render() {
    return 
    <div>
        {this.props.posts.map(post)}
    </div>
    
  }
}

export default Photo;
