import React, { Component } from "react";
import "../styles/stylesheet.css";

class AddPhoto extends Component {
  constructor() {
    //binding using this
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    //stop rerendering
    event.preventDefault();
    //console.log(event.target.elements.link.value);
    // console.log(event.target.elements.description.value);
    const imageLink = event.target.elements.link.value;
    const description = event.target.elements.description.value;

    const post = {
      id: 0,
      description: description,
      imageLink: imageLink,
    };

    if (imageLink && description) {
      this.props.onAddPhoto(post);
    }
  }

  render() {
    return (
      <div>
        <h1>PhotoWall</h1>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input
              className="input"
              type="text"
              placeholder="link"
              name="link"
            />
            <input
              className="input"
              type="text"
              placeholder="description"
              name="description"
            />
            <button className="button">Post</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPhoto;
