import React, { Component } from "react";
import Currencies from "./containers/Currencies";

class App extends Component {
  render() {
    return (
      <div className="app_container">
        <Currencies />
      </div>
    );
  }
}

export default App;
