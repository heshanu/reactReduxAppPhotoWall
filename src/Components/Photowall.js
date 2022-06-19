import React from "react";
import Photo from "./Photo";
import "../styles/stylesheet.css";
//anchor tag,href attribute

function Photowall(props) {
  return (
    <div>
      <a className="addIcon" onClick={props.onNavigate} href="#AddPhoto"></a>
      {/*<button className="addIcon" onClick={props.onNavigate}></button>*/}
      <div className="photoGrid">
        {props.posts.map((post, index) => (
          <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />
        ))}
      </div>
    </div>
  );
}

export default Photowall;
