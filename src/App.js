import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = { lead: "", punch: "" };

  async componentDidMount() {
    const result = await axios.get("/api/HttpTrigger");
    this.setState({ lead: result.data.lead, punch: result.data.punch });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{this.state.lead}</h1>
          <p>{this.state.punch}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
