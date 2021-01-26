import React, { Component } from "react";
import Radio from "./components/Radio";
import Table from "./components/Table";

class App extends Component {
  constructor(props) {
    super(props);

    this.sortByParameter = this.sortByParameter.bind(this);

    this.state = { parameterState: "" };
  }

  sortByParameter(parameter) {
    // set state of 'parameterState' here
    this.setState({ parameterState: parameter });
  }

  render() {
    return (
      <div className="container-fluid">
        <center>
          <h1>Birthday Records</h1>
        </center>
        <Radio onButtonChange={this.sortByParameter} />
        <Table sortParameter={this.state.parameterState} />
      </div>
    );
  }
}

export default App;
