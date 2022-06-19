import React from "react";
import Photo from "./Photo";
import "../styles/stylesheet.css";
import { Link } from "react-router-dom";

function Photowall(props) {
  return (<div>
      <Link className="addIcon" to="./AddPhoto"></Link>
      <div className="photoGrid">
        {props.posts.map((post, index) => (
          <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />
        ))}
      </div>
    </div>
  )
}

export default Photowall;
