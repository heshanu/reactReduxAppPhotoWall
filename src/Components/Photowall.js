import React from "react";
import Photo from "./Photo";
import "../styles/stylesheet.css";

function Photowall(props) {
  return (
    <div className="photoGrid">
      {props.posts.map((post, index) => (
        <Photo key={index} post={post} 
        onRemovePhoto={props.onRemovePhoto} />
      ))}
    </div>
  );
}

export default Photowall;
