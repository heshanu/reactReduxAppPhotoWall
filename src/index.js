import { React, Component } from "react";
import Main from './Components/Main';
import './styles/stylesheet.css';
//import { ReactDOM } from "react";
var ReactDOM = require("react-dom");

//const tasks = ["taek up trash", "shovel the drilivery", "walk the dog"];
// const element = React.createElement(
//   "ol",
//   null,
//   React.createElement("li", null, "take care cash"),
//   React.createElement("li", null, "take care cash"),
//   React.createElement("li", null, "take care cash")
// );

// const element = React.createElement(
//   "ol",
//   null,
//   tasks.map((task,index) => React.createElement("li",{key:index},task))
// );

//onst element1 = <h2>Hello</h2>;

// class List extends Component {
//   render() {
//     return
//     (
//     <ul>
//       tasks.map((task, index) =>
//       <li key={index}>{task}</li>);
//     </ul>)
//   }
// }


ReactDOM.render(<Main/>, document.getElementById("root"));
//ReactDOM.render(element1, document.getElementById("root1"));
