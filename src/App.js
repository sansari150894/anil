import React, {
  Component
} from "react";
import logo from "./logo.svg";
import "./App.css";
import SignupLogin from "./LoginSignup/SignupLogin";

class App extends Component {
  render() {
    return ( <
      div className = "App" >
      <
      SignupLogin / >
      <
      /div>
    );
  }
}

export default App;