// function App() {
//   return <></>;
// }

// export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Nav from "./components/Nav";
export default class App extends React.Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      userName: "Eslam",
    };
  }

  componentDidMount() {
    console.log("componentDidMount");

    console.log(this.state.userName, "After mounting");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <>
        {/* <span>{this.state.userName}</span> */}
        <h1>App component</h1>
        <Nav></Nav>
      </>
    );
  }
}
