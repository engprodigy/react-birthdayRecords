import React, { Component } from "react";
import { PropTypes } from "prop-types";

class Radio extends Component {
  constructor(props) {
    super(props);
    this.sortBy = this.sortBy.bind(this);
    this.state = {
      radioClick: ""
    };
  }

  sortBy(e) {
    // on radio state change handler
    this.setState({
      radioClick: e.target.value
    });
    this.props.onButtonChange(e.target.value);
  }

  render() {
    //const parameter = this.props.temperature;
    return (
      <div className="radioButtons">
        <div className="left">
          <input
            type="radio"
            name="sort_name"
            value="name"
            checked={this.state.radioClick === "name"}
            onChange={this.sortBy}
          />
          <label>&nbsp;&nbsp;Sort by name</label>
        </div>
        <div className="right">
          <input
            type="radio"
            name="sort_age"
            value="age"
            checked={this.state.radioClick === "age"}
            onChange={this.sortBy}
          />
          <label>&nbsp;&nbsp;Sort by age</label>
        </div>
      </div>
    );
  }
}

// Uncomment the snippet below
Radio.propTypes = {
  sortBy: PropTypes.func
};

export default Radio;
