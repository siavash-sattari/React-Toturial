import React, {Component} from "react";
import ReactDom from "react-dom";

// class Child extends Component {
//   render() {
//     return ReactDom.createPortal(
//       <div>
//         <h1>John Doe</h1>
//       </div>,
//       document.getElementById("child-root")
//     );
//   }
// }

const Child = () => {
  return ReactDom.createPortal(
    <div>
      <h1>John Doe</h1>
    </div>,
    document.getElementById("child-root")
  );
};

export default Child;
